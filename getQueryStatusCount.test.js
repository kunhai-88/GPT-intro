const axios = require('axios');

describe('getQueryStatusCount API', () => {
  it('should return the correct count', async () => {
    const accessToken = 'MTUyNDA2MTI4MTM4MDAxNjEyOXwxMTRCNDQ3MTVEOTM0MTU5OEU1NTU2NjVDQTQ5QkI4MQ==';
    const headers = { 'accessToken': accessToken };
    const response = await axios.get('https://preapi.aiplanck.com/api/app/enterprise/todoList/getQueryStatusCount', { headers });
    expect(response.status).toBe(200);
    expect(response.data.code).toBe(0);
    expect(response.data.msg).toBe('success');
    expect(response.data.data.totalCount).toBeGreaterThan(0);
    expect(response.data.data.completeCount).toBeGreaterThanOrEqual(0);
    expect(response.data.data.inProgressCount).toBeGreaterThanOrEqual(0);
    expect(response.data.data.notHandleCount).toBeGreaterThanOrEqual(0);
    expect(response.data.data.failedCount).toBeGreaterThanOrEqual(0);
    expect(response.data.data.overdueCount).toBeGreaterThanOrEqual(0);
    expect(response.data.data.createdByMeCount).toBeGreaterThanOrEqual(0);
    expect(response.data.data.carbonCopyCount).toBeGreaterThanOrEqual(0);
    expect(response.data.data.notReadCount).toBeGreaterThanOrEqual(0);
  });
});