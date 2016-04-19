package com.yuncetec.healthcare.dao.usermanager;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.yuncetec.healthcare.core.exception.DAOException;
import com.yuncetec.healthcare.core.exception.ServiceException;
import com.yuncetec.healthcare.core.page.PageResult;
import com.yuncetec.healthcare.dao.BaseDao;
import com.yuncetec.healthcare.mapper.usermanager.UserManagerMapper;
import com.yuncetec.healthcare.model.TmUserPO;


/**
 * 
 * Function    : 用户管理DAO
 * @author     : SuMMeR
 * CreateDate  : 2016年4月16日
 * @version    :
 */
@Repository
public class UserManagerDAO extends BaseDao
{
	@Resource
	private UserManagerMapper userManagerMapper;
	
	/**
	 * 
	 * Function    : 
	 * LastUpdate  : 2016年4月16日
	 * @param pager
	 * @return
	 * @throws ServiceException
	 */
	public PageResult<TmUserPO> userManagerPageQuery(TmUserPO condition, int curPage) throws DAOException
	{
		try
		{
			return pageQuery(userManagerMapper, "userManagerPageQuery", condition, curPage);
		}
		catch (Exception e)
		{
			throw new DAOException("用户列表查询失败", e);
		}
		
	}
	
}
