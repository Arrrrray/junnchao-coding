# pm2配置文件介绍

```json
{
  "apps": {
      "name": "wuwu",                             // 项目名          
      "script": "./bin/www",                      // 执行文件
      "cwd": "./",                                // 根目录
      "args": "",                                 // 传递给脚本的参数
      "interpreter": "",                          // 指定的脚本解释器
      "interpreter_args": "",                     // 传递给解释器的参数
      "watch": true,                              // 是否监听文件变动然后重启
      "ignore_watch": [                           // 不用监听的文件
          "node_modules",
          "logs"
      ],
      "exec_mode": "cluster_mode",                // 应用启动模式，支持fork和cluster模式
      "instances": 4,                             // 应用启动实例个数，仅在cluster模式有效 默认为fork；或者 max
      "max_memory_restart": 8,                    // 最大内存限制数，超出自动重启
      "error_file": "./logs/app-err.log",         // 错误日志文件
      "out_file": "./logs/app-out.log",           // 正常日志文件
      "merge_logs": true,                         // 设置追加日志而不是新建日志
      "log_date_format": "YYYY-MM-DD HH:mm:ss",   // 指定日志文件的时间格式
      "min_uptime": "60s",                        // 应用运行少于时间被认为是异常启动
      "max_restarts": 30,                         // 最大异常重启次数，即小于min_uptime运行时间重启次数；
      "autorestart": true,                        // 默认为true, 发生异常的情况下自动重启
      "cron_restart": "",                         // crontab时间格式重启应用，目前只支持cluster模式;
      "restart_delay": "60s"                      // 异常重启情况下，延时重启时间
      "env": {
         "PORT": 3010,                            // 端口号
         "NODE_ENV": "production",                // 环境参数，当前指定为生产环境 process.env.NODE_ENV 
         "REMOTE_ADDR": ""               // process.env.REMOTE_ADDR
      },
      "env_production": {
          "PORT": 3010,                           // 端口号
          "NODE_ENV": "production",              // 环境参数，当前指定为开发环境 pm2 start app.js --env production
          "REMOTE_ADDR": ""
      },
      "env_test": {  
         "PORT": 3010,                           // 端口号         
          "NODE_ENV": "test",                    // 环境参数，当前指定为测试环境 pm2 start app.js --env test
          "REMOTE_ADDR": ""
      }
  }
```










以下是pm2常用的命令行

$ pm2 start app.js              # 启动app.js应用程序

$ pm2 start app.js -i 4         # cluster mode 模式启动4个app.js的应用实例     # 4个应用程序会自动进行负载均衡

$ pm2 start app.js --name="api" # 启动应用程序并命名为 "api"

$ pm2 start app.js --watch      # 当文件变化时自动重启应用

$ pm2 start script.sh           # 启动 bash 脚本


$ pm2 list                      # 列表 PM2 启动的所有的应用程序

$ pm2 monit                     # 显示每个应用程序的CPU和内存占用情况

$ pm2 show [app-name]           # 显示应用程序的所有信息


$ pm2 logs                      # 显示所有应用程序的日志

$ pm2 logs [app-name]           # 显示指定应用程序的日志

$ pm2 flush


$ pm2 stop all                  # 停止所有的应用程序

$ pm2 stop 0                    # 停止 id为 0的指定应用程序

$ pm2 restart all               # 重启所有应用

$ pm2 reload all                # 重启 cluster mode下的所有应用

$ pm2 gracefulReload all        # Graceful reload all apps in cluster mode

$ pm2 delete all                # 关闭并删除所有应用

$ pm2 delete 0                  # 删除指定应用 id 0

$ pm2 scale api 10              # 把名字叫api的应用扩展到10个实例

$ pm2 reset [app-name]          # 重置重启数量


$ pm2 startup                   # 创建开机自启动命令

$ pm2 save                      # 保存当前应用列表

$ pm2 resurrect                 # 重新加载保存的应用列表

$ pm2 update                    # Save processes, kill PM2 and restore processes

$ pm2 generate                  # Generate a sample json configuration file


$ pm2 deploy app.json prod setup    # Setup "prod" remote server

$ pm2 deploy app.json prod          # Update "prod" remote server

$ pm2 deploy app.json prod revert 2 # Revert "prod" remote server by 2


$ pm2 module:generate [name]    # Generate sample module with name [name]

$ pm2 install pm2-logrotate     # Install module (here a log rotation system)

$ pm2 uninstall pm2-logrotate   # Uninstall module

$ pm2 publish                   # Increment version, git push and npm publish
————————————————

原文链接：https://blog.csdn.net/p3118601/java/article/details/83040076