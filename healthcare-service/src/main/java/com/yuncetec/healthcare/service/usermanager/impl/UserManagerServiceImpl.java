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

package com.yuncetec.healthcare.service.usermanager.impl;

import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.apache.ibatis.callback.POCallBack;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.yuncetec.healthcare.bean.AclUserBean;
import com.yuncetec.healthcare.core.common.MD5Encrypt;
import com.yuncetec.healthcare.core.exception.ActionException;
import com.yuncetec.healthcare.core.exception.ServiceException;
import com.yuncetec.healthcare.core.page.PageResult;
import com.yuncetec.healthcare.dao.usermanager.UserManagerDAO;
import com.yuncetec.healthcare.mapper.CommonMapper;
import com.yuncetec.healthcare.mapper.TmUserPOMapper;
import com.yuncetec.healthcare.mapper.usermanager.UserManagerMapper;
import com.yuncetec.healthcare.model.TmUserPO;
import com.yuncetec.healthcare.service.usermanager.UserManagerService;

/**
 * Function    : 
 * @author     : SuMMeR
 * CreateDate  : 2014年5月3日
 * @version    :
 */
@Service
public class UserManagerServiceImpl implements UserManagerService
{
	@Resource
	private CommonMapper commonMapper;
	@Resource
	private UserManagerMapper userManagerMapper;
	@Resource
	private UserManagerDAO userManagerDAO;
	@Resource
	private TmUserPOMapper tmUserMapper;

	@Override
	public PageResult<TmUserPO> userManagerPageQuery(TmUserPO condition, int curPage) throws ServiceException
	{
		try
		{
			return userManagerDAO.userManagerPageQuery(condition, curPage);
		}
		catch (Exception e)
		{
			throw new ServiceException("用户列表查询失败", e);
		}
	}

	@Override
	public int createUserInfo(TmUserPO user, MultipartFile avatar, AclUserBean aclUser) throws ServiceException
	{
		
		try
		{
			int temp = 0;
			boolean isExits = false;
			
			// 验证用户代码是否存在
			TmUserPO cond = new TmUserPO();
			cond.setUserCode(user.getUserCode());
			List<TmUserPO> list = commonMapper.select(cond, new POCallBack<>(TmUserPO.class));
			isExits = (null != list && list.size() > 0) ? true : false;
			if (!isExits)
			{
				user.setCreateBy(aclUser.getUserId());
				user.setCreateDate(new Date());
				user.setPassword(MD5Encrypt.MD5Encode(user.getPassword()));
				temp = commonMapper.insert(user);
			}
			else
			{
				temp = -1;
			}
			return temp;
		}
		catch (Exception e)
		{
			e.printStackTrace();
			throw new ServiceException(e.getMessage(), e);
		}
	}

	@Override
	public String deleteUserInfo(Integer userId) throws ServiceException
	{
		try
		{
			tmUserMapper.deleteByPrimaryKey(userId);
			return "userManager/usermanager";
		}
		catch (Exception e)
		{
			throw new ServiceException("删除用户失败", e);
		}
		
		
	}
	

}
