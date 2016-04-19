package com.yuncetec.healthcare.dao;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.List;

import javax.annotation.Resource;

import org.apache.ibatis.callback.DAOCallback;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.support.SqlSessionDaoSupport;

import com.yuncetec.healthcare.core.exception.DAOException;
import com.yuncetec.healthcare.core.page.PageResult;
import com.yuncetec.healthcare.core.page.Pager;

/**
 * 
 * Function    : 提供单表的PO操作及分页查询
 * @author     : SuMMeR
 * CreateDate  : 2016年4月16日
 * @version    :
 */
public class BaseDao extends SqlSessionDaoSupport
{
	
	/**
	 * 
	 * Function    : PO方式的查询操作
	 * LastUpdate  : 2016年4月16日
	 * @param po	作为查询条件的PO，对象中字段如果赋值，那么做为查询条件
	 * @param callback	回调函数，封装返回的结果集
	 * @return
	 */
	public <E> List<E> select(Object po, DAOCallback<E> callback)
	{
		return getSqlSession().select(po, callback);
	}
	
	/**
	 * 
	 * Function    : PO方式的新增操作
	 * LastUpdate  : 2016年4月16日
	 * @param po	作为新增字段的PO，对象中字段如果赋值，那么写入数据库相应字段
	 * @return
	 * @throws DAOException
	 */
	public int insert(Object po) throws DAOException
	{
		return getSqlSession().insert(po);
	}

	/**
	 * 
	 * Function    : PO方式的更新操作
	 * LastUpdate  : 2016年4月16日
	 * @param condPO	作为更新的条件PO，对象中字段如果赋值，那么做为更新的where条件
	 * @param valuePO	作为更新的值PO，对象中字段如果赋值，那么写入数据库相应字段
	 * @return
	 * @throws DAOException
	 */
	public int update(Object condPO, Object valuePO) throws DAOException
	{
		return getSqlSession().update(condPO, valuePO);
	}

	/**
	 * 
	 * Function    : PO方式的删除操作
	 * LastUpdate  : 2016年4月16日
	 * @param po	作为删除条件的PO，对象中字段如果赋值，那么做为删除条件
	 * @return
	 * @throws DAOException
	 */
	public int delete(Object po) throws DAOException
	{
		return getSqlSession().delete(po);
	}

	/**
	 * 
	 * Function    : 分页查询
	 * LastUpdate  : 2016年4月16日
	 * @param mapper	使用的Mapper
	 * @param methodName	调用的Mapper方法名
	 * @param parameters	SQL的参数
	 * @param curPage		当前页
	 * @return
	 * @throws DAOException
	 */
	public <T> PageResult<T> pageQuery(Object mapper, String methodName, Object parameters, int curPage) throws DAOException
	{
		try
		{
			Pager pager = new Pager();
			pager.setPageNo(curPage);
			pager.setCondition(parameters);
			Class<?> cls = mapper.getClass();
			Method method = cls.getMethod(methodName, Pager.class);
			List<T> records = (List<T>)method.invoke(mapper, pager);
			PageResult pr = new PageResult<T>();
			pr.setCurPage(curPage);
			pr.setPageSize(pager.getPageSize());
			pr.setRecords(records);
			pr.setTotalRecords(pager.getTotalRows());
			pr.setTotalPages(pager.getPageCount());
			return pr;
		}
		catch (NoSuchMethodException | SecurityException e)
		{
			e.printStackTrace();
			throw new DAOException("没有找到所执行的方法名", e);
		}
		catch (IllegalAccessException e)
		{
			e.printStackTrace();
			throw new DAOException("分页查询失败", e);
		}
		catch (IllegalArgumentException e)
		{
			e.printStackTrace();
			throw new DAOException("错误的参数类型", e);
		}
		catch (InvocationTargetException e)
		{
			e.printStackTrace();
			throw new DAOException("分页查询失败", e);
		}
	}
	
	@Resource
	public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory)
	{
		super.setSqlSessionFactory(sqlSessionFactory);
	}
}
