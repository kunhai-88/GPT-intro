
# 接口自动化测试demo
## 查询待办各状态数量

接口的请求地址是https://preapi.aiplanck.com/api/app/enterprise/todoList/getQueryStatusCount，
接口请求头header中accessToken字段的值为 "MTUyNDA2MTI4MTM4MDAxNjEyOXwxMTRCNDQ3MTVEOTM0MTU5OEU1NTU2NjVDQTQ5QkI4MQ=="注意不是Authorization
返回结果如下
{"code":0,"data":{"carbonCopyCount":8,"completeCount":39,"createdByMeCount":52,"failedCount":5,"handledCount":29,"inProgressCount":16,"notHandleCount":40,"notReadCount":8,"overdueCount":2,"totalCount":77},"msg":"success","ts":"1680483505064"}
请用js给我写一个接口自动化测试的脚本

