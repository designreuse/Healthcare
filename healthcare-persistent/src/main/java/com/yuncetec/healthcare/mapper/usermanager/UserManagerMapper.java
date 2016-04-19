package com.yuncetec.healthcare.mapper.usermanager;

import java.util.List;

import com.yuncetec.healthcare.core.page.Pager;
import com.yuncetec.healthcare.model.TmUserPO;

public interface UserManagerMapper
{
	public List<TmUserPO> userManagerPageQuery(Pager pager);
}