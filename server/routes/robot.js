const router = require('koa-router')({ 'prefix': '/robot' })

const list = { 'data': [{ 'videoLimit': null, 'camIcoUrl': '/robotservice/file/defaultimg/defautCamera.png', 'latitude': 0.0, 'naviType': 4, 'augmentedReality': 1, 'deviceId': 94, 'deviceOwnerId': null, 'xp2pMode': 0, 'robotModel': 130, 'stunInfo': '', 'locked': 0, 'chassisIp': '192.168.42.189', 'longitude': 0.0, 'controlMode': null, 'channelWorkflag': 2, 'ver': 1, 'robotName': 'ceshi189', 'enableAlarm': 3, 'ip': '192.168.42.189', 'defaultChannelId': 483, 'control': 1, 'robotSn': 'ceshi189', 'params': { 'uvLamp': 0, 'pm25': 0, 'alphaRay': 0, 'co2': 0, 'so2': 0, 'h2s': 0, 'noise': 0, 'gas': 0, 'lift': 1, 'alarmLamp': 1, 'humiture': 1, 'ozone': 0 }, 'controlType': 1, 'lastModifyTime': '2020-11-25 15:12:24', 'customerNickname': '高新兴管理员', 'online': 1, 'camIcoUpdateTime': '2020-11-25 15:12:24' }, { 'videoLimit': null, 'camIcoUrl': '/robotservice/file/defaultimg/defautCamera.png', 'latitude': 0.0, 'naviType': 4, 'augmentedReality': 1, 'deviceId': 92, 'deviceOwnerId': null, 'xp2pMode': 0, 'robotModel': 100, 'stunInfo': '', 'locked': 0, 'chassisIp': '192.168.42.219', 'longitude': 0.0, 'controlMode': null, 'channelWorkflag': 2, 'ver': 1, 'robotName': '8L开发专用219', 'enableAlarm': 3, 'ip': '192.168.42.219', 'defaultChannelId': 470, 'control': 1, 'robotSn': '8Lcs219', 'params': { 'temp': 1, 'co2': 0, 'h2s': 0, 'instrument': 1, 'infrared': 0, 'i4Capture': 0, 'ozone': 0, 'decibel': 0, 'frequency': 0, 'uvLamp': 0, 'vif': 0, 'laser': 0, 'pm25': 0, 'alphaRay': 0, 'so2': 0, 'humanDetection': 0, 'gas': 0, 'lift': 1, 'callName': 0, 'alarmLamp': 1, 'wall': 0, 'attendance': 0, 'fumigate': 0 }, 'controlType': 1, 'lastModifyTime': '2020-11-13 14:41:09', 'customerNickname': '高新兴管理员', 'online': 1, 'camIcoUpdateTime': '2020-11-13 14:41:09' }], 'sessionId': '1e6', 'type': 'RobotList', 'deviceId': '94' }
const detail = { 'ret': 1, 'msg': '查询成功', 'data': { 'videoLimit': '', 'audioType': '2', 'groupId': 0, 'language': 1, 'deviceId': 94, 'codeKey': 'ceshi189', 'host': '', 'model': 130, 'id': 94, 'delflag': '0', 'chassisIp': '192.168.42.189', 'control_type': 1, 'chnQuantity': 5, 'install_state': 1, 'ip': '192.168.42.189', 'params': '{"lift":1,"alarmLamp":1,"uvLamp":0,"ozone":0,"co2":0,"so2":0,"h2s":0,"pm25":0,"humiture":1,"noise":0,"gas":0,"alphaRay":0}', 'port': 0, 'name': 'ceshi189', 'chnNum': 304, 'code': 'ceshi189', 'add_date': 1606288344000, 'e_code': 'gxx', 'naviType': 4, 'edgeNodeName': '', 'languageName': '青年女声', 'edgeNodeId': '', 'edgeNodeCode': '', 'stunInfo': '', 'naviTypeName': '激光', 'cloud_record': 0, 'address': '', 'genderName': '', 'modelName': 'M2', 'controlType': 1, 'lastModifyTime': '2020-11-25 15:12:24', 'defaultPic': '/robotservice/file/defaultimg/img_robot-M2.png' }}
const params = { 'ret': 1, 'msg': '查询成功', 'data': [{ 'defaultSwitch': 1, 'functionName': '升降杆', 'functionType': 'lift' }, { 'defaultSwitch': 1, 'functionName': '警示灯', 'functionType': 'alarmLamp' }, { 'defaultSwitch': 0, 'functionName': '紫外灯', 'functionType': 'uvLamp' }, { 'defaultSwitch': 0, 'functionName': '臭氧', 'functionType': 'ozone' }, { 'defaultSwitch': 0, 'functionName': '二氧化碳', 'functionType': 'co2' }, { 'defaultSwitch': 0, 'functionName': '二氧化硫', 'functionType': 'so2' }, { 'defaultSwitch': 0, 'functionName': '硫化氢', 'functionType': 'h2s' }, { 'defaultSwitch': 0, 'functionName': 'pm25', 'functionType': 'pm25' }, { 'defaultSwitch': 1, 'functionName': '温湿度监测', 'functionType': 'humiture' }, { 'defaultSwitch': 0, 'functionName': '噪声监测', 'functionType': 'noise' }, { 'defaultSwitch': 0, 'functionName': '毒气监测', 'functionType': 'gas' }, { 'defaultSwitch': 0, 'functionName': '辐射监测', 'functionType': 'alphaRay' }] }

router.get('/list', async(ctx, next) => {
  ctx.set('Content-Type', 'application/json;charset=UTF-8')
  ctx.body = JSON.stringify(list)
  next()
})

router.get('/searchRobotByDeviceId', async(ctx, next) => {
  ctx.set('Content-Type', 'application/json;charset=UTF-8')
  ctx.body = JSON.stringify(detail)
  next()
})

router.get('/findRobotCustomFunction', async(ctx, next) => {
  ctx.set('Content-Type', 'application/json;charset=UTF-8')
  ctx.body = JSON.stringify(params)
  next()
})

module.exports = router
