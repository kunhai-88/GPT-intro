const axios = require('axios');

describe('getNotReadCount API', () => {
  it('should return the correct count', async () => {
    const accessToken = 'MTUyNDA2MTI4MTM4MDAxNjEyOXwxMTRCNDQ3MTVEOTM0MTU5OEU1NTU2NjVDQTQ5QkI4MQ==';
    const headers = { 'accessToken': accessToken  };
    const response = await axios.get('https://preapi.aiplanck.com/api/app/enterprise/message/getNotReadCount', { headers });
    console.log(response.data)
    expect(response.status).toBe(200);
    expect(response.data.code).toBe(0);
    expect(response.data.msg).toBe('success');
    expect(typeof response.data.data).toBe('number');
    expect(response.data.data).toBeGreaterThan(0);
  });
});