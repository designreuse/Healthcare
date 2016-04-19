package com.yuncetec.healthcare.service.login;

import java.util.List;

import com.yuncetec.healthcare.bean.RoleTreeNode;
import com.yuncetec.healthcare.core.common.LoginResult;
import com.yuncetec.healthcare.core.exception.ServiceException;
import com.yuncetec.healthcare.core.page.PageResult;
import com.yuncetec.healthcare.core.page.Pager;
import com.yuncetec.healthcare.model.TmUserPO;

/**
 * Function    : 
 * @author     : zhao.feng
 * CreateDate  : 2010-11-5
 * @version    :
 */
public interface LoginService
{

	/**
	 * 
	 * Function    : 登录
	 * LastUpdate  : 2014年6月2日
	 * @param user
	 * @return
	 * @throws ServiceException
	 */
	public LoginResult login(TmUserPO user) throws ServiceException;
	
	/**
	 * 
	 * Function    : 根据用户ID获取角色选择树
	 * LastUpdate  : 2016年4月16日
	 * @param userId
	 * @return
	 * @throws ServiceException
	 */
	public List<RoleTreeNode> choiceRoleTree(Integer userId) throws ServiceException;
	
	/**
	 * 
	 * Function    : 
	 * LastUpdate  : 2016年4月16日
	 * @param roleId
	 * @return
	 * @throws ServiceException
	 */
	public String generateMenu(Integer roleId) throws ServiceException;
	
	/**
	 * 
	 * Function    : 用户选择完角色进入主界面
	 * LastUpdate  : 2016年4月16日
	 * @param roleId
	 * @return
	 * @throws ServiceException
	 */
	public String showIndex(Integer roleId) throws ServiceException;
	
}
