package com.yuncetec.healthcare.service.usermanager;

import org.springframework.web.multipart.MultipartFile;

import com.yuncetec.healthcare.bean.AclUserBean;
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
public interface UserManagerService
{
	
	public PageResult<TmUserPO> userManagerPageQuery(TmUserPO condition, int curPage) throws ServiceException;

	public int createUserInfo(TmUserPO user, MultipartFile avatar, AclUserBean aclUser) throws ServiceException;
	
	public String deleteUserInfo(Integer userId) throws ServiceException;
}
