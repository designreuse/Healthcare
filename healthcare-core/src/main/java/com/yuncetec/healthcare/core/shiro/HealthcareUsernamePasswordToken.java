package com.yuncetec.healthcare.core.shiro;

import org.apache.shiro.authc.UsernamePasswordToken;

/**
 * 用户和密码（包含验证码及移动端登录标识）令牌类
 * @author Think
 * @version 2013-5-19
 */
public class HealthcareUsernamePasswordToken extends UsernamePasswordToken
{

	private static final long serialVersionUID = 1L;

	private String captcha;

	private boolean mobileLogin;

	public HealthcareUsernamePasswordToken()
	{
		super();
	}

	public HealthcareUsernamePasswordToken(String username, char[] password, boolean rememberMe, String host, String captcha, boolean mobileLogin)
	{
		super(username, password, rememberMe, host);
		this.captcha = captcha;
		this.mobileLogin = mobileLogin;
	}

	public String getCaptcha()
	{
		return captcha;
	}

	public void setCaptcha(String captcha)
	{
		this.captcha = captcha;
	}

	public boolean isMobileLogin()
	{
		return mobileLogin;
	}

}