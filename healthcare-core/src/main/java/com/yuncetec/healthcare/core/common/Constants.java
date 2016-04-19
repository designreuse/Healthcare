package com.yuncetec.healthcare.core.common;

public interface Constants
{
	public static int PAGE_SIZE = 10;// 页面显示条数

	public static String LOGIN_USER = "loginUser"; // 登录用户

	public static String CONDITION = "condition"; // 查询条件KEY

	public static Integer STATUS_VALID = new Integer("10011001"); //有效

	public static Integer STATUS_INVALID = new Integer("10011002"); //无效

	public static Integer STATUS_TRUE = new Integer("10021001"); //是

	public static Integer STATUS_FALSE = new Integer("10021002"); //否

	public static Integer SEX_MALE = new Integer("10031001"); //男

	public static Integer SEX_FEMALE = new Integer("10031002"); //女

	public static Integer SEX_UNKNOW = new Integer("10031003"); //未知
	
	public static Integer ORG_TYPE_COMPANY = new Integer("20011001"); //公司组织

	public static Integer ORG_TYPE_DEPARTMENT = new Integer("20011002"); //部门组织

	public static Integer ORG_B_TYPE_INSIDE = new Integer("20021001"); //内部组织

	public static Integer ORG_B_TYPE_CUSTOMER = new Integer("20021002"); //客户组织

	public static Integer ORG_B_TYPE_SUPPLIER = new Integer("20021003"); //供应商组织

	public static Integer WH_TYPE_COMMON = new Integer("20031001"); //通用仓库

	public static Integer WH_TYPE_REGULABLE = new Integer("20031002"); //环境可调节仓库

	public static Integer WH_TYPE_HAZARDOUS = new Integer("20031003"); //危险品库

	public static Integer WH_B_TYPE_EXTERNAL = new Integer("20041001"); //外部仓库

	public static Integer WH_B_TYPE_INSIDE = new Integer("20041002"); //内部仓库

	public static Integer AREA_STATUS_VALID = new Integer("20051001"); //可用

	public static Integer AREA_STATUS_INVALID = new Integer("20051002"); //停用

	public static Integer AREA_STATUS_FREEZE = new Integer("20051003"); //冻结

	public static Integer STORAGE_STRATEGY_RANDOM = new Integer("20061001"); //随机

	public static Integer STORAGE_STRATEGY_POSITIONING = new Integer("20061002"); //定置定位

	public static Integer MATERIAL_TYPE_RAW = new Integer("20071001"); //原材料

	public static Integer MATERIAL_TYPE_SEMI = new Integer("20071002"); //半成品

	public static Integer MATERIAL_TYPE_FINISHED = new Integer("20071003"); //产成品

	public static Integer ACCOUNTING_AMOUNT = new Integer("20081001"); //数量核算

	public static Integer ACCOUNTING_AMOUNT_MONEY = new Integer("20081002"); //数量+金额核算

	public static Integer MATERIAL_LIFECYCLE_PRE = new Integer("20091001"); //实验

	public static Integer MATERIAL_LIFECYCLE_CLIMBING = new Integer("20091002"); //爬坡

	public static Integer MATERIAL_LIFECYCLE_PRODUCTION = new Integer("20091003"); //量产

	public static Integer MATERIAL_LIFECYCLE_DISCARD = new Integer("20091004"); //废弃

	public static Integer INSPECTION_ALL = new Integer("20101001"); //全检

	public static Integer INSPECTION_RANDOM = new Integer("20101002"); //抽检

	public static Integer INSPECTION_EXEMPT = new Integer("20101003"); //免检

	public static Integer OUTBOUND_STRATEGY_FIFO = new Integer("20111001"); //先进先出

	public static Integer OUTBOUND_STRATEGY_LIFO = new Integer("20111002"); //后进先出

	public static Integer ENTERPRISE_PROPERTY_STATE = new Integer("20121001"); //国有

	public static Integer ENTERPRISE_PROPERTY_COLLECTIVE = new Integer("20121002"); //集体

	public static Integer ENTERPRISE_PROPERTY_ASSOCIATED = new Integer("20121003"); //联营

	public static Integer ENTERPRISE_PROPERTY_JOINT_STOCK = new Integer("20121004"); //股份合作制

	public static Integer ENTERPRISE_PROPERTY_PRIVATE = new Integer("20121005"); //私营

	public static Integer ENTERPRISE_PROPERTY_INDIVIDUAL = new Integer("20121006"); //个体户

	public static Integer ENTERPRISE_PROPERTY_PARTNERSHIP = new Integer("20121007"); //合伙

	public static Integer ENTERPRISE_PROPERTY_LIMITED = new Integer("20121008"); //有限责任

	public static Integer ENTERPRISE_PROPERTY_SINO_FOREIGN = new Integer("20121009"); //中外合作

	public static Integer ENTERPRISE_PROPERTY_OVERSEAS = new Integer("20121010"); //外商投资

	public static Integer BANK_BOC = new Integer("20131001"); //中国银行

	public static Integer BANK_ABC = new Integer("20131002"); //农业银行

	public static Integer BANK_BC = new Integer("20131003"); //交通银行

	public static Integer BANK_ICBC = new Integer("20131004"); //工商银行

	public static Integer BANK_CCB = new Integer("20131005"); //建设银行

	public static Integer BANK_PSBC = new Integer("20131006"); //邮政储蓄银行

	public static Integer BUSSINESS_SCOPE_INDUSTRY = new Integer("20141001"); //工业

	public static Integer BUSSINESS_SCOPE_AGRICULTURE = new Integer("20141002"); //农业

	public static Integer BUSSINESS_SCOPE_BUILDING = new Integer("20141003"); //建筑

	public static Integer BUSSINESS_SCOPE_TRANS = new Integer("20141004"); //交通运输

	public static Integer BUSSINESS_SCOPE_POSTS = new Integer("20141005"); //邮电

	public static Integer BUSSINESS_SCOPE_BUSSI = new Integer("20141006"); //商业

	public static Integer BUSSINESS_SCOPE_FOREIGN = new Integer("20141007"); //外贸

	public static Integer BUSSINESS_SCOPE_TRAIN = new Integer("20141008"); //培训

	public static Integer BUSSINESS_SCOPE_CONSULTING = new Integer("20141009"); //咨询服务

	public static Integer BUSSINESS_SCOPE_CONFERENCE = new Integer("20141010"); //会议服务

	public static Integer BUSSINESS_SCOPE_LOGISTICS = new Integer("20141011"); //物流

	public static Integer BUSSINESS_SCOPE_CULTURE = new Integer("20141012"); //文化

	public static Integer BUSSINESS_SCOPE_ADVERTISING = new Integer("20141013"); //广告

	public static Integer BUSSINESS_SCOPE_SALES = new Integer("20141014"); //销售

	public static Integer BUSSINESS_SCOPE_OTHER = new Integer("20141015"); //其他

	public static Integer INDUSTRY_AFAF = new Integer("20151001"); //农、林、牧、渔业

	public static Integer INDUSTRY_MINING = new Integer("20151002"); //采矿业

	public static Integer INDUSTRY_MANUFACTURING = new Integer("20151003"); //制造业

	public static Integer INDUSTRY_EHGW = new Integer("20151004"); //电力、热力、燃气、水生产供应业

	public static Integer INDUSTRY_EPM = new Integer("20151005"); //环境、公共设施管理业

	public static Integer INDUSTRY_BUILDING = new Integer("20151006"); //建筑业

	public static Integer INDUSTRY_TWP = new Integer("20151007"); //交通运输、仓储、邮政业

	public static Integer INDUSTRY_ICS = new Integer("20151008"); //信息传输、计算机、软件业

	public static Integer INDUSTRY_WHOLESALE_RETAIL = new Integer("20151009"); //批发、零售业

	public static Integer INDUSTRY_ACC_FOOD = new Integer("20151010"); //住宿、餐饮业

	public static Integer INDUSTRY_FINANCE_INS = new Integer("20151011"); //金融、保险业

	public static Integer INDUSTRY_RE = new Integer("20151012"); //房地产业

	public static Integer INDUSTRY_LBS = new Integer("20151013"); //租赁、商务服务业

	public static Integer INDUSTRY_STSA = new Integer("20151014"); //科学研究、技术服务和地址勘查业

	public static Integer INDUSTRY_EDU = new Integer("20151015"); //教育

	public static Integer INDUSTRY_HSS = new Integer("20151016"); //卫生、社会保障、社会服务业

	public static Integer INDUSTRY_CSE = new Integer("20151017"); //文化、体育、娱乐业

	public static Integer INDUSTRY_COMPLEX = new Integer("20151018"); //综合

	public static Integer INDUSTRY_OTHER = new Integer("20151019"); //其他

	public static Integer ATTACHMENT_USER_PHOTO = new Integer("20161001"); //用户照片

	public static Integer ATTACHMENT_FORM = new Integer("20161002"); //单据附件

	public static Integer ATTACHMENT_OTHER = new Integer("20161003"); //其他

	public static Integer RECEIPTS_STATUS_SAVE = new Integer("20171001"); //保存

	public static Integer RECEIPTS_STATUS_SUBMIT = new Integer("20171002"); //提交

	public static Integer RECEIPTS_STATUS_PROCESSED = new Integer("20171003"); //审批中

	public static Integer RECEIPTS_STATUS_PROCESSED_RE = new Integer("20171004"); //审批中(驳回)

	public static Integer RECEIPTS_STATUS_SUCCESS = new Integer("20171005"); //审批成功

	public static Integer RECEIPTS_STATUS_REJECT = new Integer("20171006"); //审批失败

	public static Integer ACTIVITI_OPT_SUBMIT = new Integer("20181001"); //提交

	public static Integer ACTIVITI_OPT_RESUBMIT = new Integer("20181002"); //重新提交

	public static Integer ACTIVITI_OPT_REVOCATION = new Integer("20181003"); //撤销

	public static Integer ACTIVITI_OPT_CLAIM = new Integer("20181004"); //签收

	public static Integer ACTIVITI_OPT_AGREE = new Integer("20181005"); //同意

	public static Integer ACTIVITI_OPT_REJECT = new Integer("20181006"); //驳回

	public static Integer ACTIVITI_OPT_DISAGREE = new Integer("20181007"); //不同意

	public static Integer BUSINESS_TYPE_H = new Integer("20191001"); //货代

	public static Integer BUSINESS_TYPE_C = new Integer("20191002"); //采购

	public static Integer TRANSPORT_TYPE_DHL = new Integer("20201001"); //DHL

	public static Integer TRANSPORT_TYPE_INLAND = new Integer("20201002"); //国内

	public static Integer TRANSPORT_TYPE_JS = new Integer("20201003"); //海运集散

	public static Integer TRANSPORT_TYPE_LCL = new Integer("20201004"); //海运拼箱

	public static Integer TRANSPORT_TYPE_FCL = new Integer("20201005"); //海运整箱

	public static Integer TRANSPORT_TYPE_EMPTY = new Integer("20201006"); //空出

	public static Integer TRANSPORT_TYPE_AIR = new Integer("20201007"); //空运

	public static Integer TRANSPORT_TYPE_AIR_D = new Integer("20201008"); //空运(供应商)

	public static Integer SUPPLIER_TYPE_PART = new Integer("20211001"); //零件供应商

	public static Integer SUPPLIER_TYPE_TRANSPORT = new Integer("20211002"); //运输供应商

	public static Integer JIT_ORDER_STATUS_SAVE = new Integer("99011001"); //保存

	public static Integer JIT_ORDER_STATUS_SUBMIT = new Integer("99011002"); //提交

	public static Integer JIT_ORDER_STATUS_APPROVED = new Integer("99011003"); //审批通过

	public static Integer CURRENCY_TYPE_USD = new Integer("99021001"); //USD

	public static Integer CURRENCY_TYPE_RMB = new Integer("99021002"); //RMB

	public static Integer CURRENCY_TYPE_EUR = new Integer("99021003"); //EUR

	public static Integer CURRENCY_TYPE_JPY = new Integer("99021004"); //JPY

	public static Integer CURRENCY_TYPE_NOK = new Integer("99021005"); //NOK

	public static Integer CURRENCY_TYPE_HKG = new Integer("99021006"); //HKG

	public static Integer CURRENCY_TYPE_AUD = new Integer("99021007"); //AUD

	public static Integer CURRENCY_TYPE_CAD = new Integer("99021008"); //CAD

	public static Integer CURRENCY_TYPE_GBP = new Integer("99021009"); //GBP

	public static Integer CURRENCY_TYPE_CHF = new Integer("99021010"); //CHF

	public static Integer INT_TRANS_TYPE_JS = new Integer("99031001"); //海运集散

	public static Integer INT_TRANS_TYPE_FCL = new Integer("99031002"); //海运整箱

	public static Integer INT_TRANS_TYPE_LCL = new Integer("99031003"); //海运拼箱

	public static Integer INT_TRANS_TYPE_AIR = new Integer("99031004"); //空运

	public static Integer INT_TRANS_TYPE_DHL = new Integer("99031005"); //DHL

	public static Integer INT_TRANS_TYPE_LAND = new Integer("99031006"); //陆运

	public static Integer INLAND_TRANS_TYPE_AIR = new Integer("99041001"); //空运

	public static Integer INLAND_TRANS_TYPE_LAND = new Integer("99041002"); //陆运

	public static Integer TRADE_MODE_COMMON = new Integer("99051001"); //一般贸易

	public static Integer TRADE_MODE_TEMP = new Integer("99051002"); //暂时进出货物

	public static Integer TRADE_MODE_SAMPLES = new Integer("99051003"); //货样广告品

	public static Integer TRADE_MODE_REPAIR = new Integer("99051004"); //修理物品

	public static Integer TRADE_MODE_FREE = new Integer("99051005"); //其他进出口免费

	public static Integer TRADE_MODE_PROCESSING = new Integer("99051006"); //来料加工

	public static Integer TRADE_MODE_RENTING = new Integer("99051007"); //租赁贸易

	public static Integer TRADE_MODE_OTHER = new Integer("99051008"); //其他贸易

	public static Integer PRICE_CLAUSE_EXW = new Integer("99061001"); //EXW

	public static Integer PRICE_CLAUSE_FCA = new Integer("99061002"); //FCA

	public static Integer PRICE_CLAUSE_FOB = new Integer("99061003"); //FOB

	public static Integer PRICE_CLAUSE_CIF = new Integer("99061004"); //CIF

	public static Integer PRICE_CLAUSE_CFR = new Integer("99061005"); //CFR

	public static Integer PRICE_CLAUSE_CPT = new Integer("99061006"); //CPT

	public static Integer PRICE_CLAUSE_CIP = new Integer("99061007"); //CIP

	public static Integer PRICE_CLAUSE_DDA = new Integer("99061008"); //DDA

	public static Integer PRICE_CLAUSE_DAP = new Integer("99061009"); //DAP

	public static Integer PAYMENT_TYPE_PAYED = new Integer("99071001"); //付款后提货

	public static Integer PAYMENT_TYPE_DELIVERY_60 = new Integer("99071002"); //提货日期后60天

	public static Integer PAYMENT_TYPE_INVOICE_30 = new Integer("99071003"); //发票日期后30天

	public static Integer PAYMENT_TYPE_INVOICE_60 = new Integer("99071004"); //发票日期后60天

	public static Integer PAYMENT_TYPE_INVOICE_90 = new Integer("99071005"); //发票日期后90天

	public static Integer PAYMENT_TYPE_INVOICE_NM_5 = new Integer("99071006"); //发票日期后第二个月5日

	public static Integer PAYMENT_TYPE_INVOICE_NM_15 = new Integer("99071007"); //发票日期后第二个月15日

	public static Integer PAYMENT_TYPE_INVOICE_NM_25 = new Integer("99071008"); //发票日期后第二个月25日

	public static Integer PAYMENT_TYPE_INVOICE_TM_10 = new Integer("99071009"); //发票日期后本月10日

	public static Integer PAYMENT_TYPE_INVOICE_TM_20 = new Integer("99071010"); //发票日期后本月20日

	public static Integer PAYMENT_TYPE_INVOICE_TM_30 = new Integer("99071011"); //发票日期后本月30日

	public static Integer PAYMENT_TYPE_INVOICE_NM_LAST = new Integer("99071012"); //发票日期后下月最后一个工作日

	public static Integer PAYMENT_TYPE_AD = new Integer("99071013"); //收到预付款后付款

	public static Integer PAYMENT_TYPE_INVOICE_SM_25 = new Integer("99071014"); //发票日期后第三月25日

	public static Integer PAYMENT_TYPE_DELIVERY_NM_LAST = new Integer("99071015"); //提单日期后第二月最后一天

	public static Integer PAYMENT_TYPE_INVOICE_90_END_MONTH = new Integer("99071016"); //发票日期后90天当月月底

	public static Integer PAYMENT_TYPE_INVOICE_75 = new Integer("99071017"); //发票日期后75天

	public static Integer PAYMENT_TYPE_INVOICE_SM_10 = new Integer("99071018"); //发票日期后第三月10日
	
	public static Integer PAYMENT_TYPE_INVOICE_45 = new Integer("99071019"); //发票日期后45天

	public static Integer TRADE_TYPE_IMPORT = new Integer("99081001"); //进口

	public static Integer TRADE_TYPE_EXPORT = new Integer("99081002"); //出口
	
	/**
	 * 下面是新增的fixCode
	 */
	public static Integer STATUS_USABLE = new Integer("10041001");//可用  
	
	public static Integer STATUS_DISABLE = new Integer("10041002");//停用
	
	public static Integer STORAGE_TYPE_E = new Integer("20221001");//高架
	
	public static Integer STORAGE_TYPE_W = new Integer("20221002");//行道
	
	public static Integer STORAGE_TYPE_S = new Integer("20221003");//堆垛
	 					
	public static Integer ATTACHMENT_STATUS_C = new Integer("20231001");//缓存
	
	public static Integer ATTACHMENT_STATUS_S = new Integer("20231002");//存储appliance
	
	public static Integer APPLIANCE_STATUS_N = new Integer("20241001");//正常
	
	public static Integer APPLIANCE_STATUS_B = new Integer("20241002");//冻结
	
	public static Integer APPLIANCE_STATUS_M = new Integer("20241003");//损坏
	
	public static Integer BELONG_DISTRICT_CKD = new Integer("20251001");// ckd
	
	public static Integer BELONG_DISTRICT_LOCAL = new Integer("20251002");// local
	
	public static Integer MATERIAL_VALUE_A = new Integer("20261001");// A
	
	public static Integer MATERIAL_VALUE_B = new Integer("20261002");// B
	
	public static Integer MATERIAL_VALUE_C = new Integer("20261003");// C
	
	public static Integer MATERIAL_PECULIARITY_N = new Integer("20271001");// 正常品
	
	public static Integer MATERIAL_PECULIARITY_D = new Integer("20271002");// 危险品
	
	public static Integer MATERIAL_PECULIARITY_C = new Integer("20271003");// 化学品
	
	public static Integer MATERIAL_PECULIARITY_P = new Integer("20271004");// 防光
	
	public static Integer MATERIAL_PECULIARITY_DA = new Integer("20271005");// 防潮
	
	public static Integer MATERIAL_PECULIARITY_M = new Integer("20271006");// 保湿
	
	public static Integer MATERIAL_STATUS_U = new Integer("20281001");// 启用
	
	public static Integer MATERIAL_STATUS_D = new Integer("20281002");// 停用
	
	public static Integer UNIT_MM = new Integer("20291001");// 毫米
	
	public static Integer UNIT_CM = new Integer("20291002");// 厘米
	
	public static Integer UNIT_M = new Integer("20291003");// 米
	
	public static Integer UNIT_KM = new Integer("20291004");// 千米
	
	public static Integer UNIT_POT = new Integer("20291005");// 罐
	
	public static Integer UNIT_EA = new Integer("20291006");// 件
	
	public static Integer UNIT_DM2 = new Integer("20291007");// 平方分米
	
	public static Integer UNIT_M2 = new Integer("20291008");// 平方米
	
	public static Integer UNIT_MG = new Integer("20291009");// 毫克
	
	public static Integer UNIT_G = new Integer("20291011");// 克
	
	public static Integer UNIT_KG = new Integer("20291012");// 千克
	
	public static Integer UNIT_T = new Integer("20291013");// 吨
	
	public static Integer UNIT_ML = new Integer("20291014");// 吨
	
	public static Integer UNIT_L = new Integer("20291015");// 吨
	
	public static Integer WOODINESS_B = new Integer("20301001");//木质
	
	public static Integer PLASTIC_B = new Integer("20301002");//塑料
	
	public static Integer PAPERBOARD_B = new Integer("20301003");//纸板
	
	public static Integer EISENHALTIG_B = new Integer("20301004");//铁质
	
	public static Integer OTHER_B = new Integer("20301005");//木质
	
	public static Integer WOODINESS_Q = new Integer("20311001");//木质
	
	public static Integer PLASTIC_Q = new Integer("20311002");//塑料
	
	public static Integer PAPERBOARD_Q = new Integer("20311003");//纸板
	
	public static Integer EISENHALTIG_Q = new Integer("20311004");//铁质
	
	public static Integer OTHER_Q = new Integer("20311005");//木质
	
	public static Integer STORAGE_AREA = new Integer("20321001");//存储区
	
	public static Integer INSPECTION_AREA = new Integer("20321002");//验货区
	
	public static Integer ABNORMAL_MATERIAL_AREA = new Integer("20321003");//异常材料区
	
	public static Integer SORT_AREA = new Integer("20321004");//备货区
	
	public static Integer EQUIPMENT_STORAGE_AREA = new Integer("20321005");//器具存放区
	
	public static Integer OVERBOUGHT_ZONE = new Integer("20321006");//超储区
	
	public static Integer WAREHOUSE_STATUS_N = new Integer("20331001");//正常库存
	
	public static Integer WAREHOUSE_STATUS_M = new Integer("20331002");//移动在途
	
	public static Integer WAREHOUSE_STATUS_L = new Integer("20331003");//库存锁定
		
	public static Integer WAREHOUSE_STATUS_RC = new Integer("20331004");//库存消耗
	
	public static Integer WAREHOUSE_STATUS_INC = new Integer("20331005");//盘点差异消耗
	
	public static Integer IN_S_SAVE = new Integer("20341001");//保存
	
	public static Integer IN_S_SUBMIT = new Integer("20341002");//提交
	
	public static Integer IN_S_INSPECTIONED = new Integer("20341003");//已验货
	
	public static Integer IN_S_DELETED = new Integer("20341004");//已删除
	
	public static Integer IN_NO_INSPECTION = new Integer("20351001");//未验货
	
	public static Integer PREPARED_DATA = new Integer("20351002");//已分配
	
	public static Integer IN_SUBMIT = new Integer("20351003");//已保存
	
	public static Integer IN_INSPECTIONING = new Integer("20351004");//验货中
	
	public static Integer IN_INSPECTIONED = new Integer("20351005");//验货完成
	
	public static Integer IN_IN_STORAGE = new Integer("20351006");//已入库
	
	public static Integer WAITING_TO_STORAGE = new Integer("20361001");//待入库
	
	public static Integer STORAGED_AND_NO_PUTAWAY = new Integer("20361002");//已入库未上架
	
	public static Integer PUTAWAYING = new Integer("20361003");//上架中
	
	public static Integer PUTAWAIED = new Integer("20361004");//上架完成
	
	public static Integer MOVE_S_SAVE = new Integer("20371001");//保存
	
	public static Integer MOVE_S_SUBMIT = new Integer("20371002");//提交
	
	public static Integer MOVE_S_MOVING = new Integer("20371003");//移库中
	
	public static Integer MOVE_S_MOVED = new Integer("20371004");//移库完成
	
	public static Integer CIRCULATION_BY_MONTH = new Integer("20381001");//循环类型--按自然月分配
	
	public static Integer CIRCULATION_BY_CUSTOM = new Integer("20381002");//循环类型--人工定制分配
	
	public static Integer MATERIAL_ALLOT_AVERAGE = new Integer("20391001");//物料分配原则--平均分配
	
	public static Integer INVENTORY_CIRCULATION = new Integer("20401001");//盘点类型-循环盘点
	
	public static Integer INVENTORY_SINGLE = new Integer("20401002");//盘点类型-单次盘点
	
	public static Integer INVENTORY_STATUS_SAVE = new Integer("20411001");//盘点状态-保存
	
	public static Integer INVENTORY_STATUS_SUBMIT = new Integer("20411002");//盘点状态-提交
	
	public static Integer INVENTORY_STATUS_ASSIGN = new Integer("20411003");//盘点状态-下达
	
	public static Integer INVENTORY_STATUS_ING = new Integer("20411004");//盘点状态-盘点中
	
	public static Integer INVENTORY_STATUS_PENDING_DIF = new Integer("20411005");//盘点状态-待差异处理
	
	public static Integer INVENTORY_STATUS_INVENTORIED = new Integer("20411006");//盘点状态-盘点完成
	
	public static Integer DIF_APPROVE_STATUS_SAVE = new Integer("20421001");//盘点差异状态--保存
	
	public static Integer DIF_APPROVE_STATUS_SUBMIT = new Integer("20421002");//盘点差异状态--提交
	
	public static Integer DIF_APPROVE_STATUS_APPROVEL = new Integer("20421003");//盘点差异状态--审批通过
	
	public static Integer DIF_APPROVE_STATUS_REJECT = new Integer("20421004");//盘点差异状态--驳回
	
	public static Integer EX_WAREHOUSE_KANBON = new Integer("20431001");//出库类型--KANBON
	
	public static Integer EX_WAREHOUSE_JIT = new Integer("20431002");//出库类型--JIT
	
	public static Integer EX_WAREHOUSE_JIS = new Integer("20431003");//出库类型--JIS	
	
    public static Integer TRANSPORTATION_INLAND = new Integer("20441001");//运输类型--陆运
	
	public static Integer TRANSPORTATION_OCEAN  = new Integer("20441002");//运输类型--海运
	
	public static Integer TRANSPORTATION_AIR = new Integer("20441003");//运输类型--空运
	
	public static Integer EX_WAREHOUSE_PLAN_S_SAVE = new Integer("20451001");//出库计划状态--保存
	
	public static Integer EX_WAREHOUSE_PLAN_S_SUBMIT = new Integer("20451002");//出库计划状态--提交
	
	public static Integer EX_WAREHOUSE_PLAN_S_PICKED = new Integer("20451003");//出库计划状态--已拣货
	
	public static Integer EX_WAREHOUSE_PLAN_S_REJECTED = new Integer("20451004");//出库计划状态--已驳回
	
	public static Integer EX_WAREHOUSE_PLAN_S_FINISH = new Integer("20451005");//出库计划状态--已出库
	
	public static Integer EX_WAREHOUSE_PLAN_S_DEL = new Integer("20451006");//出库计划状态--已删除
	
	public static Integer PICK_PREPARED_DATA = new Integer("20461001");//拣货状态--已准备数据
	
	public static Integer PICK_STATUS_SAVE = new Integer("20461002");//拣货状态-保存
	
	public static Integer PICK_STATUS_SUBMIT = new Integer("20461003");//拣货状态-提交
	
	public static Integer PICK_STATUS_PICKING = new Integer("20461004");//拣货状态-拣货中
	
	public static Integer PICK_STATUS_PICKED = new Integer("20461005");//拣货状态-拣货完成
	
	public static Integer EX_WAREHOUSE_SAVE = new Integer("20471001");//出库状态-保存
	
	public static Integer EX_WAREHOUSE_SUBMIT = new Integer("20471002");//出库状态-提交
	
	public static Integer EX_WAREHOUSE_ING = new Integer("20471003");//出库状态-出库中
	
	public static Integer EX_WAREHOUSED = new Integer("20471004");//出库状态-出库完成
	
	public static Integer EXAMINE_STATUS_NORMAL = new Integer("20481001");//验货状态-正常
	
	public static Integer EXAMINE_STATUS_DAMAGED = new Integer("20481002");//验货状态-破损
	
	public static Integer EXAMINE_STATUS_LITTLE = new Integer("20481003");//验货状态-缺货
	
	public static Integer DAMAGE_TYPE_OUTER_PACKING = new Integer("20491001");//破损类型-外包装破损
	
	public static Integer DAMAGE_TYPE_CONTENTS = new Integer("20491002");//破损类型-内容物破损
	
	public static Integer DAMAGE_TYPE_RAIN_WATER = new Integer("20491003");//破损类型-雨淋水渍
	
	public static Integer DAMAGE_TYPE_OTHER = new Integer("20491004");//其他-雨淋水渍
	
	public static Integer DAMAGE_CAUSE_BEFORE_ARRIVAL = new Integer("20501001");//破损原因-来料已损坏
	
	public static Integer DAMAGE_CAUSE_HANDING_DAMAGE = new Integer("20501002");//破损原因-搬运损坏
	
	public static Long OVERFLOW_ID = new Long("9999999999");//超储区Id
	
	public static final String OVERFLOW = "OVERFLOW";//超储区名称
	
	public static Integer P_S_PUTAWAIED = new Integer("20511001");//上架状态-已上架
	
	public static Integer P_S_NO_PUTAWAY = new Integer("20511002");//上架状态-未上架
	
	public static Integer UNPACKING_INSPECTION = new Integer("20521001");//清点原则-开箱验货
	
	public static Integer IDENTIFY_THE_INSPECTION_OUTSIDE = new Integer("20521002");//清点原则-外标识验货
	
	public static Integer CHECKOUTED = new Integer("20531001");//检验状态-已检验
	
	public static Integer NO_CHECKOUT = new Integer("20531002");//检验状态-未检验
	
	public static final String BUSINESS_CODE_TYPE_JHQ = "1004";//拣货区  业务代码表，区域类型
	
	public static final String BUSINESS_CODE_TYPE_YHQ = "1002";//验货区  业务代码表，区域类型
	
	public static Integer MOVEMENT_SCAN_STATUS_PICK_UP = new Integer("20541001");//移库扫描确认状态--已扫描取件
	
	public static Integer MOVEMENT_SCAN_STATUS_PUTAWAY = new Integer("20541002");//移库扫描确认状态--已移库上架
	
	public static Integer MOVEMENT_SCAN_STATUS_NO_SCAN = new Integer("20541003");//移库扫描确认状态--未扫描
	
	public static Integer PICKING_D_STATUS_NO_PICK = new Integer("20551001");//拣货明细状态--未拣货
	
	public static Integer PICKING_D_STATUS_PICKED = new Integer("20551002");//拣货明细状态--已拣货
	
	public static Integer SCAN_STATUS_NO_SCAN = new Integer("20561001");//扫描状态--未扫描
	
	public static Integer SCAN_STATUS_SCANED = new Integer("20561002");//扫描状态--已扫描
	
	public static Integer CHECK_MAIN_SAVE = new Integer("20571001");//盘点主单状态--保存
	
	public static Integer CHECK_MAIN_PLAN = new Integer("20571002");//盘点主单状态--计划
	
	public static Integer CHECK_MAIN_RUNNING = new Integer("20571003");//盘点主单状态--执行中
	
	public static Integer CHECK_MAIN_FINISH = new Integer("20571004");//盘点主单状态--完成
	
	public static Long UNUSUAL_ID = new Long("9999999998");//异常材料区储位Id
	
	public static final String UNUSUAL = "UNUSUAL";//异常材料区名称
	
	public static Integer ACCECP_STATUS_SAVE = new Integer("20581001");//收料单状态--保存
	
	public static Integer ACCECP_STATUS_SUBIMT = new Integer("20581002");//收料单状态--提交
	
	public static final String R_ADMIN = "R_ADMIN";//管理员

}
