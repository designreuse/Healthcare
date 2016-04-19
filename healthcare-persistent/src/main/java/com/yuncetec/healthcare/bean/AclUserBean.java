/**********************************************************************
* <pre>
* FILE : AclUserBean.java
* CLASS : AclUserBean
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
* 		  |2010-11-11| SuMMeR| Created |
* DESCRIPTION:
* </pre>
***********************************************************************/
/**
* $Id: AclUserBean.java,v 1.1 2013/07/31 08:32:41 xin.jin Exp $
*/

package com.yuncetec.healthcare.bean;

import java.util.Locale;

import lombok.Data;

import com.yuncetec.healthcare.core.bean.BaseBean;

/**
 * Function    : 系统用户
 * @author     : SuMMeR
 * CreateDate  : 2010-11-11
 * @version    :
 */
@Data
public class AclUserBean extends BaseBean
{
	private Integer userId;

	private String userCode;

	private String userName;

	private Locale locale;

	private Integer roleId;

	private String roleName;

	private String roleCode;

	private Integer companyId;

}
