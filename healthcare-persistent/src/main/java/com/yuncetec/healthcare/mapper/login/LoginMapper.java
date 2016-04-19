package com.yuncetec.healthcare.mapper.login;

import java.util.List;

import com.yuncetec.healthcare.bean.AclUserBean;
import com.yuncetec.healthcare.bean.MenuBean;
import com.yuncetec.healthcare.bean.RoleTreeNode;
import com.yuncetec.healthcare.core.page.Pager;
import com.yuncetec.healthcare.model.TmUserPO;

public interface LoginMapper
{
	public List<TmUserPO> selectByUserCode(TmUserPO userPO);
	
	public List<TmUserPO> pageQueryUser(Pager pager);
	
	public List<AclUserBean> selectRoleByUserCode(String userCode);
	
	public List<RoleTreeNode> selectRoleForChoice(Integer userId);
	
	public List<MenuBean> getMenuInfo(Integer roleId);
}