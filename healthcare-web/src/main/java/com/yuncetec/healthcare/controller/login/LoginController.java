package com.yuncetec.healthcare.controller.login;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.yuncetec.healthcare.bean.RoleTreeNode;
import com.yuncetec.healthcare.controller.BaseController;
import com.yuncetec.healthcare.core.common.LoginResult;
import com.yuncetec.healthcare.core.exception.ActionException;
import com.yuncetec.healthcare.core.exception.JsonException;
import com.yuncetec.healthcare.core.exception.ServiceException;
import com.yuncetec.healthcare.core.page.PageResult;
import com.yuncetec.healthcare.core.page.Pager;
import com.yuncetec.healthcare.model.TmUserPO;
import com.yuncetec.healthcare.service.login.LoginService;

@Controller
public class LoginController extends BaseController
{
	@Resource
	LoginService loginService;

	/**
	 * 
	 * Function    : 登录
	 * LastUpdate  : 2014年5月30日
	 * @param user
	 * @param model
	 * @return
	 * @throws ActionException
	 */
	@RequestMapping(value = "/login.action")
	public String login(TmUserPO user, Model model) throws ActionException
	{
		try
		{
			// 验证登录用户
			LoginResult loginResult = loginService.login(user);
			if ("index".equals(loginResult.getReturnView()))
			{ 
				// 生成菜单
				String menuStr = loginService.generateMenu(getLoginUser().getRoleId());
				model.addAttribute("menu", menuStr);
			}
			model.addAttribute("noRole", loginResult.getHasError());
			return loginResult.getReturnView();
		}
		catch (ServiceException e)
		{
			e.printStackTrace();
			model.addAttribute("isAuthenticate", "false");
			return "login/login";
		}
	}
	
	/**
	 * 
	 * Function    : 根据用户获取可选岗位树
	 * LastUpdate  : 2014年5月30日
	 * @return
	 * @throws ActionException
	 */
	@RequestMapping(value = "/getPostRoleForChoice")
	public @ResponseBody
	List<RoleTreeNode> getPostRoleForChoice() throws ActionException
	{
		try
		{
			Integer userId = getLoginUser().getUserId();
			return loginService.choiceRoleTree(userId);
		}
		catch (ServiceException e)
		{
			e.printStackTrace();
			throw new ActionException("根据用户查询岗位失败", e);
		}
	}
	
	/**
	 * 
	 * Function    : 根据用户所选角色，转入到系统主页面，并将角色信息存入SESSION
	 * LastUpdate  : 2014年6月2日
	 * @param postId
	 * @param roleId
	 * @return
	 * @throws ActionException
	 */
	@RequestMapping(value = "/showIndex")
	public String showIndex(Integer roleId, Model model) throws ActionException
	{
		try
		{
			System.out.println("roleId ------------------ " + roleId);
			// 处理选择的角色信息,如果角色信息为空，那么到SESSION中获取
			if (null == roleId)
			{
				roleId = getLoginUser().getRoleId();
			}
			String returnStr = loginService.showIndex(roleId);
			// 生成菜单
			String menuStr = loginService.generateMenu(getLoginUser().getRoleId());
			model.addAttribute("menu", menuStr);
			return returnStr;
		}
		catch (ServiceException e)
		{
			e.printStackTrace();
			throw new ActionException("选择岗位、角色失败", e);
		}
	}
}
