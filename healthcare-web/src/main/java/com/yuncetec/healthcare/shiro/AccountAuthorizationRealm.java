package com.yuncetec.healthcare.shiro;

import javax.annotation.Resource;

import org.apache.shiro.authc.AccountException;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;

import com.yuncetec.healthcare.bean.AclUserBean;
import com.yuncetec.healthcare.core.shiro.HealthcareUsernamePasswordToken;
import com.yuncetec.healthcare.dao.login.LoginDAO;
import com.yuncetec.healthcare.model.TmUserPO;
import com.yuncetec.healthcare.service.login.LoginService;

/**
 * 管理员的认证,角色,权限控制
 */
public class AccountAuthorizationRealm extends AuthorizingRealm
{
	@Resource
	private LoginDAO loginDAO;
	/**
	 * 查询获得用户信息
	 * AuthenticationToken 用于收集用户提交的身份（如用户名）及凭据（如密码）
	 *
	 * AuthenticationInfo有两个作用：
	 * 1、如果Realm 是AuthenticatingRealm 子类，则提供给AuthenticatingRealm 内部使用的
	 *    CredentialsMatcher进行凭据验证；（如果没有继承它需要在自己的Realm中自己实现验证）；
	 * 2、提供给SecurityManager来创建Subject（提供身份信息）；
	 *
	 * @param authcToken
	 * @return
	 * @throws org.apache.shiro.authc.AuthenticationException
	 */
	@Override
	protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authcToken) throws AuthenticationException
	{
		//HealthcareUsernamePasswordToken token = (HealthcareUsernamePasswordToken) authcToken;
		try
		{
			/*这里编写认证代码*/
			UsernamePasswordToken token = (UsernamePasswordToken) authcToken;
			if (token.getUsername() == null)  
	        {  
	            throw new AccountException("用户名密码不正确");  
	        }
			//String password = null;
			TmUserPO user = loginDAO.getUserByCode(token.getUsername());
			if (user != null)
			{
				// 将用户信息存入到SESSION中
//				Subject subject = SecurityUtils.getSubject();
//				Session session = subject.getSession();
//				AclUserBean aclUser = new AclUserBean();
//				aclUser.setUserId(user.getUserId());
//				aclUser.setUserCode(user.getUserCode());
//				aclUser.setUserName(user.getUserName());
//				session.setAttribute(Constants.LOGIN_USER, aclUser);
				return new SimpleAuthenticationInfo(user.getUserCode(), user.getPassword(), getName());
			}
			else
			{
				return null;
			}
		}
		catch (Exception e)
		{
			throw new AuthenticationException("用户认证失败", e);
		}
	}

	/**
	 * 表示根据用户身份获取授权信息
	 * 授权查询回调函数, 进行鉴权但缓存中无用户的授权信息时调用.在配有缓存的情况下，只加载一次.
	 */
	@Override
	protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection)
	{
		/*String loginName = (String) principalCollection.getPrimaryPrincipal();
		Account account = accountDao.findByLoginName(loginName);
		List<Role> roleList = roleDao.getRoleByAcctId(account.getId());
		Set<String> roleNameList = Sets.newHashSet();
		for (Role role : roleList) {
		    roleNameList.add(role.getRoleName());
		}
		List<Permission> permissionList = permissionDao.getPermByRoleList(roleList);
		Set<String> permNameList = Sets.newHashSet();
		for (Permission permission : permissionList) {
		    permNameList.add(permission.getPermName());
		}*/
//		SimpleAuthorizationInfo info = new SimpleAuthorizationInfo();
//		info.addRole("front");
		//        info.setStringPermissions(permNameList);
		return null;
	}

	/**
	 * 授权用户信息
	 */
	/*
	public static class Principal implements Serializable
	{

		private static final long serialVersionUID = 1L;

		private String id; // 编号

		private String loginName; // 登录名

		private String name; // 姓名

		private boolean mobileLogin; // 是否手机登录

		//		private Map<String, Object> cacheMap;

		public Principal(Member user, boolean mobileLogin)
		{
			this.id = user.getMemberId() + "";
			this.loginName = user.getMemberName();
			this.name = user.getMemberName();
			this.mobileLogin = mobileLogin;
		}

		public String getId()
		{
			return id;
		}

		public String getLoginName()
		{
			return loginName;
		}

		public String getName()
		{
			return name;
		}

		public boolean isMobileLogin()
		{
			return mobileLogin;
		}

		public String toString()
		{
			return loginName;
		}

	}
	*/

}
