/**********************************************************************
* <pre>
* FILE : LoginResult.java
* CLASS : LoginResult
*
* AUTHOR : Administrator
*
* FUNCTION : TODO
*
*
*======================================================================
* CHANGE HISTORY LOG
*----------------------------------------------------------------------
* MOD. NO.| DATE | NAME | REASON | CHANGE REQ.
*----------------------------------------------------------------------
* 		  |2014年6月6日| Administrator| Created |
* DESCRIPTION:
* </pre>
***********************************************************************/
/**
* $Id: LoginResult.java,v 0.1 2014年6月6日 上午9:36:25 Administrator Exp $
*/

package com.yuncetec.healthcare.core.common;

/**
 * Function    : 	登录结果
 * @author     : Administrator
 * CreateDate  : 2014年6月6日
 * @version    :
 */
public class LoginResult
{
	private String returnView;

	private String hasError;

	public LoginResult(String returnView, String hasError)
	{
		super();
		this.returnView = returnView;
		this.hasError = hasError;
	}

	public String getReturnView()
	{
		return returnView;
	}

	public void setReturnView(String returnView)
	{
		this.returnView = returnView;
	}

	public String getHasError()
	{
		return hasError;
	}

	public void setHasError(String hasError)
	{
		this.hasError = hasError;
	}

}
