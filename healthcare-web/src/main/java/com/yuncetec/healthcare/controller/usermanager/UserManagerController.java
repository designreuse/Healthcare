package com.yuncetec.healthcare.controller.usermanager;

import java.util.Date;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;
import org.springframework.web.multipart.MultipartFile;

import com.yuncetec.healthcare.controller.BaseController;
import com.yuncetec.healthcare.core.bean.BaseCondition;
import com.yuncetec.healthcare.core.common.Constants;
import com.yuncetec.healthcare.core.exception.ActionException;
import com.yuncetec.healthcare.core.exception.JsonException;
import com.yuncetec.healthcare.core.page.PageResult;
import com.yuncetec.healthcare.core.page.Pager;
import com.yuncetec.healthcare.model.TmUserPO;
import com.yuncetec.healthcare.service.usermanager.UserManagerService;

@Controller
@RequestMapping("/usermanager")
@SessionAttributes(value = { Constants.CONDITION }, types = { BaseCondition.class })
public class UserManagerController extends BaseController
{
	@Resource
	private UserManagerService userManagerService;

	/**
	 * 进入用户查询页面,清空session中的条件回显
	 * @return String
	 */
	@RequestMapping(value = "/initUsermanagerPre")
	public String initUsermanagerPre(SessionStatus status) throws ActionException
	{
		status.setComplete();
		return "userManager/usermanager";
	}

	/**
	 * 进入用户查询页面
	 * @return String
	 */
	@RequestMapping(value = "/usermanagerPre")
	public String usermanagerPre() throws ActionException
	{
		return "userManager/usermanager";
	}

	/**
	 * 用户信息查询所有
	 * @param userBean
	 * @param pageSize
	 * @param curPage
	 * @return
	 */
	@RequestMapping(value = "/userManagerPageQuery")
	public @ResponseBody
	PageResult<TmUserPO> userManagerPageQuery(TmUserPO condition, int curPage) throws JsonException
	{
		try
		{
			return userManagerService.userManagerPageQuery(condition, curPage);
		}
		catch (Exception e)
		{
			throw new JsonException(e.getMessage(), e);
		}

	}

	/**
	 * 
	 * Function    : 进入创建用户
	 * LastUpdate  : 2016年4月16日
	 * @return
	 */
	@RequestMapping(value = "/createUserInfoPre")
	public String createUserInfoPre() throws ActionException
	{
		return "userManager/createUserInfo";
	}

	/**
	 * 用户信息保存
	 * @param user
	 * @param file
	 * @return
	 * @throws IOException
	 */
	@RequestMapping(value = "/createUserInfo")
	public @ResponseBody int createUserInfo(
			TmUserPO user, 
			@RequestParam(value = "file", required = false)MultipartFile avatar) throws ActionException
	{
		try
		{
			return userManagerService.createUserInfo(user, avatar, getLoginUser());
		}
		catch (Exception e)
		{
			e.printStackTrace();
			throw new ActionException(e.getMessage(), e);
		}
	}
	
	/**
	 * 
	 * Function    : 删除用户
	 * LastUpdate  : 2016年4月16日
	 * @param userId
	 * @return
	 * @throws ActionException
	 */
	@RequestMapping(value = "/deleteUserInfo")
	public String deleteUserInfo(Integer userId) throws ActionException
	{
		try
		{
			return userManagerService.deleteUserInfo(userId);
		}
		catch (Exception e)
		{
			e.printStackTrace();
			throw new ActionException(e.getMessage(), e);
		}
	}
}
