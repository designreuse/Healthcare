/**
 *   刷新查询列表，用于删除数据后刷新
 * @return
 */
function flushList()
{
	var curPage=$("#curPage").attr("value");
	__extQuery__(curPage);
}