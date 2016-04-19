/**********************************************************************
* <pre>
* FILE : CommonMapper.java
* CLASS : CommonMapper
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
* 		  |2016年4月16日| SuMMeR| Created |
* DESCRIPTION:
* </pre>
***********************************************************************/
/**
* $Id: CommonMapper.java,v 0.1 2016年4月16日 上午1:24:00 SuMMeR Exp $
*/

package com.yuncetec.healthcare.mapper;

import java.util.List;

import org.apache.ibatis.callback.DAOCallback;
import org.apache.ibatis.util.POIdentifyMapper;

/**
 * Function    : 
 * @author     : SuMMeR
 * CreateDate  : 2016年4月16日
 * @version    :
 */
public interface CommonMapper extends POIdentifyMapper
{
	int delete(Object po);

	int insert(Object po);

	<E> List<E> select(Object po, DAOCallback<E> callback);

	int update(Object condPO, Object valuePO);
}
