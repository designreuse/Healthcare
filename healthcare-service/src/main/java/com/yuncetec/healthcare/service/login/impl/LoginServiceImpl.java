/**********************************************************************
* <pre>
* FILE : LoginService.java
* CLASS : LoginService
*
* AUTHOR : SuMMeR
*
* FUNCTION : TODO
*
*
*======================================================================
* CHANGE HISTORY LOG
*----------------------------------------------------------------------
* MOD. NO.| DATE | NAME | REASON | CHANGE REQ.
*----------------------------------------------------------------------
* 		  |2014年5月3日| SuMMeR| Created |
* DESCRIPTION:
* </pre>
***********************************************************************/
/**
* $Id: LoginService.java,v 0.1 2014年5月3日 上午10:58:34 SuMMeR Exp $
*/

package com.yuncetec.healthcare.service.login.impl;

import java.util.List;

import javax.annotation.Resource;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Service;

import com.yuncetec.healthcare.bean.AclUserBean;
import com.yuncetec.healthcare.bean.RoleTreeNode;
import com.yuncetec.healthcare.core.common.Constants;
import com.yuncetec.healthcare.core.common.LoginResult;
import com.yuncetec.healthcare.core.exception.DAOException;
import com.yuncetec.healthcare.core.exception.ServiceException;
import com.yuncetec.healthcare.core.page.PageResult;
import com.yuncetec.healthcare.dao.login.LoginDAO;
import com.yuncetec.healthcare.mapper.CommonMapper;
import com.yuncetec.healthcare.mapper.TmRolePOMapper;
import com.yuncetec.healthcare.model.TmRolePO;
import com.yuncetec.healthcare.model.TmUserPO;
import com.yuncetec.healthcare.service.login.LoginService;
import com.yuncetec.healthcare.service.util.TreeMaker;
import com.yuncetec.healthcare.service.util.UserUtil;


/**
 * Function    : 
 * @author     : SuMMeR
 * CreateDate  : 2014年5月3日
 * @version    :
 */
@Service
public class LoginServiceImpl implements LoginService
{
	@Resource
	private LoginDAO loginDAO;
	@Resource
	private TmRolePOMapper roleMapper;

	/*
	 * (non-Javadoc)
	 * @see com.chkj.www.smip.service.login.ILoginService#login(com.chkj.www.smip.model.TmUserPO)
	 */
	public LoginResult login(TmUserPO user) throws ServiceException
	{
		// 验证登录用户
		Subject subject = SecurityUtils.getSubject();
		UsernamePasswordToken token = new UsernamePasswordToken(user.getUserCode(), user.getPassword());
		try
		{
			TmUserPO sessionUser = loginDAO.getUserByCode(user.getUserCode());
			Session session = subject.getSession();
			if(!subject.isAuthenticated())
			{
				// 如果用户没有认证
				subject.login(token);
				// 验证成功后将用户信息存放到SESSION中
				sessionUser = loginDAO.getUserByCode(user.getUserCode());
				AclUserBean aclUser = new AclUserBean();
				aclUser.setUserId(sessionUser.getUserId());
				aclUser.setUserCode(sessionUser.getUserCode());
				aclUser.setUserName(sessionUser.getUserName());
				session.setAttribute(Constants.LOGIN_USER, aclUser);
			}
			else
			{
				// 如果用户认证通过
				sessionUser = loginDAO.getUserByCode(((AclUserBean)session.getAttribute(Constants.LOGIN_USER)).getUserCode());
			}
			// 处理用户岗位、角色选择操作
			return postRoleHandler(sessionUser, session);

		}
		catch (AuthenticationException e)
		{
			token.clear();
			throw new ServiceException("登录失败：用户名或密码错误", e);
		}
		catch (DAOException e)
		{
			throw new ServiceException("登录失败：用户名或密码错误", e);
		}
	}
	
	/**
	 * Function    : 用户角色选择处理器
	 * LastUpdate  : 2014年6月4日
	 * @param user
	 * @param session
	 * @param aclUser
	 * @return
	 */
	private LoginResult postRoleHandler(TmUserPO user, Session session) throws ServiceException
	{
		try
		{
			AclUserBean aclUser = (AclUserBean) session.getAttribute(Constants.LOGIN_USER);
			// 如果已经选择完角色，那么直接进入系统首页
			if(UserUtil.hasRole(aclUser))
			{
				return new LoginResult("index", null);
			}
			// 判断用户可以选择的角色，如果只有一个，那么不进行选择，直接跳入系统首页
			List<AclUserBean> list = loginDAO.selectRoleByUserCode(user.getUserCode());
			if (null != list && list.size() > 1)
			{
				// 多角色
				return new LoginResult("login/postRoleChoice", null);
			}
			if (null != list && list.size() < 1)
			{
				return new LoginResult("login/login", "ture");
			}
			
			// 角色信息放入SESSION中
			AclUserBean tempAcl = list.get(0);
			aclUser.setRoleId(tempAcl.getRoleId());
			aclUser.setRoleName(tempAcl.getRoleName());
			aclUser.setRoleCode(tempAcl.getRoleCode());
			session.setAttribute(Constants.LOGIN_USER, aclUser);
			return new LoginResult("index", null);
		}
		catch (Exception e)
		{
			throw new ServiceException("角色选择失败", e);
		}

	}
	
	

	/**
	 * 	根据用户ID获取角色选择树
	 */
	@Override
	public List<RoleTreeNode> choiceRoleTree(Integer userId) throws ServiceException
	{
		try
		{
			return loginDAO.selectRoleForChoice(userId);
		}
		catch (DAOException e)
		{
			e.printStackTrace();
			throw new ServiceException("角色选择树获取失败", e);
		}
	}
	
	

	@Override
	public String generateMenu(Integer roleId) throws ServiceException
	{
		String treeStr = null;
		try
		{
			treeStr = TreeMaker.buildTree(loginDAO.getMenuInfo(roleId));
		}
		catch (DAOException e)
		{
			e.printStackTrace();
			throw new ServiceException("获取菜单失败", e);
		}
		return treeStr;
	}
	
	

	@Override
	public String showIndex(Integer roleId) throws ServiceException
	{
		try
		{
			Subject subject = SecurityUtils.getSubject();
			Session session = subject.getSession();
			AclUserBean aclUser = (AclUserBean) session.getAttribute(Constants.LOGIN_USER);
			// 通过roleId获取角色信息
			TmRolePO rolePO = roleMapper.selectByPrimaryKey(roleId);
			aclUser.setRoleId(roleId);
			aclUser.setRoleCode(rolePO.getRoleCode());
			aclUser.setRoleName(rolePO.getRoleName());
			session.setAttribute(Constants.LOGIN_USER, aclUser);
			return "index";
		}
		catch (Exception e)
		{
			throw new ServiceException("选择岗位、角色失败", e);
		}
	}

}
