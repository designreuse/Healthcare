package com.yuncetec.healthcare.dao.login;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.yuncetec.healthcare.bean.AclUserBean;
import com.yuncetec.healthcare.bean.MenuBean;
import com.yuncetec.healthcare.bean.RoleTreeNode;
import com.yuncetec.healthcare.core.common.Constants;
import com.yuncetec.healthcare.core.exception.DAOException;
import com.yuncetec.healthcare.core.exception.TooManyResultsException;
import com.yuncetec.healthcare.core.page.PageResult;
import com.yuncetec.healthcare.dao.BaseDao;
import com.yuncetec.healthcare.mapper.CommonMapper;
import com.yuncetec.healthcare.mapper.login.LoginMapper;
import com.yuncetec.healthcare.model.TmUserPO;


/**
 * Function :
 * 
 * @author : zhaofeng CreateDate : 2010-11-11
 * @version :
 */
@Repository
public class LoginDAO extends BaseDao
{
	@Resource
	LoginMapper loginMapper;

	/**
	 * 
	 */
	public TmUserPO getUserByCode(String userCode) throws DAOException
	{
		try
		{
			TmUserPO userPO = new TmUserPO();
			if (null == userCode || "".equals(userCode))
			{
				return null;
			}
			userPO.setUserCode(userCode);
			userPO.setUserStatus(Constants.STATUS_VALID);
			List<TmUserPO> users = loginMapper.selectByUserCode(userPO);
			if(null != users && users.size() == 1)
			{
				return users.get(0);
			}
			else
			{
				throw new TooManyResultsException("");
			}
		}
		catch (Exception e)
		{
			throw new DAOException(e.getMessage(), e);
		}

	}
	
	/**
	 * 
	 * Function    : 根据用户代码查询所有角色
	 * LastUpdate  : 2016年4月16日
	 * @param userCode
	 * @return
	 */
	public List<AclUserBean> selectRoleByUserCode(String userCode) throws DAOException
	{
		return loginMapper.selectRoleByUserCode(userCode);
	}
	
	/**
	 * 
	 * Function    : 根据用户ID获取可以选择的角色树
	 * LastUpdate  : 2016年4月16日
	 * @param userId
	 * @return
	 */
	public List<RoleTreeNode> selectRoleForChoice(Integer userId) throws DAOException
	{
		return loginMapper.selectRoleForChoice(userId);
	}
	
	public List<MenuBean> getMenuInfo(Integer roleId) throws DAOException
	{
		return loginMapper.getMenuInfo(roleId);
	}
	
	public PageResult<TmUserPO> pageQueryUser(int curPage) throws DAOException
	{
		try
		{
			PageResult<TmUserPO> pageResult = pageQuery(loginMapper, "pageQueryUser", null, curPage);
			return pageResult;
		}
		catch (Exception e)
		{
			e.printStackTrace();
			throw new DAOException("", e);
		}

	}
	
	
}
