declare type TApi = {
  list: (params?: any) => Promise<any>,
  searchRobotByDeviceId: (params?: any) => Promise<any>,
  findRobotCustomFunction: (params?: any) => Promise<any>,
}
