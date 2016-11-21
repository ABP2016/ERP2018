'use strict';

module.exports = function(grunt) {
    grunt.file.preserveBOM = true;
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        autoprefixer: {
            options: {
                browsers: ['last 3 versions', 'ie 8', 'ie 9', '> 5% in CN']
            },
            app: {
                src: ['www/css/**/*.css', '!./www/css/**/*.min.css']
            }
        },
        bump: {
            options: {
                files: ['package.json'],
                updateConfigs: ['pkg'],
                commit: false,
                commitMessage: '%VERSION%',
                commitFiles: ['package.json'],
                createTag: false,
                tagName: 'v%VERSION%',
                tagMessage: 'Version %VERSION%',
                push: false,
                pushTo: 'upstream',
                gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
                globalReplace: false,
                prereleaseName: false,
                regExp: false
            }
        },
        exec: {
            options: {
                stdout: true,
                stderr: true
            },
            npmInstall: {
                command: 'npm install'
            },
            npmUpdate: {
                command: 'npm update --save-dev'
            }
        },
        mbower: {
            copy: {
                options: {
                    cleanTargetDir: true,
                    cleanBowerDir: true,
                    copy: true,
                    install: false,
                    targetDir: './www/packages/'
                }
            },
            clean: {
                options: {
                    cleanTargetDir: true,
                    cleanBowerDir: true,
                    copy: false,
                    install: false,
                    targetDir: './www/packages/'
                }
            },
            install: {
                options: {
                    cleanTargetDir: true,
                    cleanBowerDir: true,
                    copy: true,
                    install: true,
                    targetDir: './www/packages/'
                }
            }
        },
        replace: {
            ver: {
                src: [
                    'www/js/config.js'
                    ,'www/js/base/basedata.js'
                    ,'www/js/common/constants.main.js'
                    ,'www/css/**/*.css'
                    ,'www/**/*.html'
                    ,'!www/packages/**/*.html'
                ],
                overwrite: true,
                replacements: [
                    {
                        from: /ver=\d{0,9}.{0,9}"/g,
                        to: 'ver=<%= pkg.version %>"'
                    },
                    {
                        from: /ver=\d{0,9}.{0,9}'/g,
                        to: 'ver=<%= pkg.version %>\''
                    }
                ]
            },
            local: {
                src: ['www/js/base/constants.js', 'www/js/base/basedata.js'],
                overwrite: true,
                replacements: [
                    {
                        from: 'jymstoredev',
                        to: 'jymstoretest'
                    },
                    {
                        from: 'jymstoreproduct',
                        to: 'jymstoretest'
                    },
                    {
                        from: 'jym-dev-api',
                        to: 'jym-test-api'
                    },
                    {
                        from: 'jym-product-api',
                        to: 'jym-test-api'
                    },
                    {
                        from: 'jym-dev-ac',
                        to: 'jym-test-ac'
                    },
                    {
                        from: 'jym-product-ac',
                        to: 'jym-test-ac'
                    },
                    {
                        from: 'jym-dev-valicode',
                        to: 'jym-test-valicode'
                    },
                    {
                        from: 'jym-product-valicode',
                        to: 'jym-test-valicode'
                    },
                    {
                        from: 'jym-dev-auth',
                        to: 'jym-test-auth'
                    },
                    {
                        from: 'jym-product-auth',
                        to: 'jym-test-auth'
                    },
                    {
                        from: 'jym-dev-oper',
                        to: 'jym-test-oper'
                    },
                    {
                        from: 'jym-product-oper',
                        to: 'jym-test-oper'
                    },
                    {
                        from: 'jym-dev-paymentmanager',
                        to: 'jym-test-paymentmanager'
                    },
                    {
                        from: 'jym-product-paymentmanager',
                        to: 'jym-test-paymentmanager'
                    },
                    {
                        from:'jym-dev-coupon',
                        to:'jym-test-coupon'
                    },
                    {
                        from:'jym-product-coupon',
                        to:'jym-test-coupon'
                    },
                    {
                        from:'jym-dev-payment',
                        to:'jym-test-payment'
                    },
                    {
                        from:'jym-product-sftpayment',
                        to:'jym-test-payment'
                    },
                    {
                        from: /VERSION: .+/,
                        to: 'VERSION: \'<%= pkg.version %>\','
                    },
                    {
                        from: 'ENV: \'dev\'',
                        to: 'ENV: \'test\''
                    },
                    {
                        from: 'ENV: \'product\'',
                        to: 'ENV: \'test\''
                    },
                    {
                        from: 'https://www',
                        to: 'http://local-www'
                    },
                    {
                        from: 'https://jym-web-test-www',
                        to: 'http://local-www'
                    },
                    {
                        from: 'https://jym-web-dev-www',
                        to: 'http://local-www'
                    },
                    {
                        from: 'https://jym-web-pre-www',
                        to: 'http://local-www'
                    },
                    {
                        from: 'https://i',
                        to: 'http://local-i'
                    },
                    {
                        from: 'https://jym-web-test-i',
                        to: 'http://local-i'
                    },
                    {
                        from: 'https://jym-web-dev-i',
                        to: 'http://local-i'
                    },
                    {
                        from: 'https://jym-web-pre-i',
                        to: 'http://local-i'
                    },
                    {
                        from: 'https://welcome',
                        to: 'http://local-welcome'
                    },
                    {
                        from: 'https://jym-web-test-welcome',
                        to: 'http://local-welcome'
                    },
                    {
                        from: 'https://jym-web-dev-welcome',
                        to: 'http://local-welcome'
                    },
                    {
                        from: 'https://jym-web-pre-welcome',
                        to: 'http://local-welcome'
                    },
                    {
                        from: 'https://help',
                        to: 'http://local-help'
                    },
                    {
                        from: 'https://jym-web-test-help',
                        to: 'http://local-help'
                    },
                    {
                        from: 'https://jym-web-dev-help',
                        to: 'http://local-help'
                    },
                    {
                        from: 'https://jym-web-pre-help',
                        to: 'http://local-help'
                    },
                    {
                        from: 'https://cashier',
                        to: 'http://local-cashier'
                    },
                    {
                        from: 'https://jym-web-test-cashier',
                        to: 'http://local-cashier'
                    },
                    {
                        from: 'https://jym-web-dev-cashier',
                        to: 'http://local-cashier'
                    },
                    {
                        from: 'https://jym-web-pre-cashier',
                        to: 'http://local-cashier'
                    }
                ]
            },
            dev: {
                src: ['www/js/base/constants.js', 'www/js/base/basedata.js'],
                overwrite: true,
                replacements: [
                    {
                        from: 'jymstoretest',
                        to: 'jymstoredev'
                    },
                    {
                        from: 'jymstoreproduct',
                        to: 'jymstoredev'
                    },
                    {
                        from: 'jym-test-api',
                        to: 'jym-dev-api'
                    },
                    {
                        from: 'jym-product-api',
                        to: 'jym-dev-api'
                    },
                    {
                        from: 'api.dev.ad',
                        to: 'jym-dev-api'
                    },
                    {
                        from: 'http://10.1.10.36/Jinyinmao.Tirisfal.Api',
                        to: 'https://jym-dev-api.jinyinmao.com.cn'
                    },
                    {
                        from: 'jym-test-ac',
                        to: 'jym-dev-ac'
                    },
                    {
                        from: 'jym-product-ac',
                        to: 'jym-dev-ac'
                    },
                    {
                        from: 'ac.dev.ad',
                        to: 'jym-dev-ac'
                    },
                    {
                        from: 'jym-test-valicode',
                        to: 'jym-dev-valicode'
                    },
                    {
                        from: 'jym-product-valicode',
                        to: 'jym-dev-valicode'
                    },
                    {
                        from: 'valicode.dev.ad',
                        to: 'jym-dev-valicode'
                    },
                    {
                        from: 'jym-test-auth',
                        to: 'jym-dev-auth'
                    },
                    {
                        from: 'auth.dev.ad',
                        to: 'jym-dev-auth'
                    },
                    {
                        from: 'jym-product-auth',
                        to: 'jym-dev-auth'
                    },
                    {
                        from: 'jym-product-oper',
                        to: 'jym-dev-oper'
                    },
                    {
                        from: 'jym-test-oper',
                        to: 'jym-dev-oper'
                    },
                    {
                        from: 'oper.dev.ad',
                        to: 'jym-dev-oper'
                    },
                    {
                        from: 'jym-product-paymentmanager',
                        to: 'jym-dev-paymentmanager'
                    },
                    {
                        from: 'jym-test-paymentmanager',
                        to: 'jym-dev-paymentmanager'
                    },
                    {
                        from: 'paymentmanager.dev.ad',
                        to: 'jym-dev-paymentmanager'
                    },
                    {
                        from:'jym-test-coupon',
                        to:'jym-dev-coupon'
                    },
                    {
                        from:'jym-product-coupon',
                        to:'jym-dev-coupon'
                    },
                    {
                        from:'coupon.dev.ad',
                        to:'jym-dev-coupon'
                    },
                    {
                        from:'jym-test-payment',
                        to:'jym-dev-payment'
                    },
                    {
                        from:'jym-product-sftpayment',
                        to:'jym-dev-payment'
                    },
                    {
                        from:'payment.dev.ad',
                        to:'jym-dev-payment'
                    },
                    {
                        from: /VERSION: .+/,
                        to: 'VERSION: \'<%= pkg.version %>\','
                    },
                    {
                        from: 'ENV: \'test\'',
                        to: 'ENV: \'dev\''
                    },
                    {
                        from: 'ENV: \'product\'',
                        to: 'ENV: \'dev\''
                    },
                    {
                        from: 'https://www.jinyinmao',
                        to: 'https://jym-web-dev-www.jinyinmao'
                    },
                    {
                        from: 'http://local-www',
                        to: 'https://jym-web-dev-www'
                    },
                    {
                        from: 'https://jym-web-test-www',
                        to: 'https://jym-web-dev-www'
                    },
                    {
                        from: 'https://www.dev.ad',
                        to: 'https://jym-web-dev-www'
                    },
                    {
                        from: 'https://welcome.jinyinmao',
                        to: 'https://jym-web-dev-welcome.jinyinmao'
                    },
                    {
                        from: 'https://welcome.dev.ad',
                        to: 'https://jym-web-dev-welcome'
                    },
                    {
                        from: 'https://jym-web-test-welcome',
                        to: 'https://jym-web-dev-welcome'
                    },
                    {
                        from: 'http://local-welcome',
                        to: 'https://jym-web-dev-welcome'
                    },
                    {
                        from: 'https://help.jinyinmao',
                        to: 'https://jym-web-dev-help.jinyinmao'
                    },
                    {
                        from: 'https://jym-web-test-help',
                        to: 'https://jym-web-dev-help'
                    },
                    {
                        from: 'https://help.dev.ad',
                        to: 'https://jym-web-dev-help'
                    },
                    {
                        from: 'http://local-help',
                        to: 'https://jym-web-dev-help'
                    },
                    {
                        from: 'https://cashier.jinyinmao',
                        to: 'https://jym-web-dev-cashier.jinyinmao'
                    },
                    {
                        from: 'https://jym-web-test-cashier',
                        to: 'https://jym-web-dev-cashier'
                    },
                    {
                        from: 'http://local-cashier',
                        to: 'https://jym-web-dev-cashier'
                    },
                    {
                        from: 'https://cashier.dev.ad',
                        to: 'https://jym-web-dev-cashier'
                    },
                    {
                        from: 'https://i.jinyinmao',
                        to: 'https://jym-web-dev-i.jinyinmao'
                    },
                    {
                        from: 'https://jym-web-test-i',
                        to: 'https://jym-web-dev-i'
                    },
                    {
                        from: 'http://local-i',
                        to: 'https://jym-web-dev-i'
                    },
                    {
                        from: 'https://i.dev.ad',
                        to: 'https://jym-web-dev-i'
                    }

                ]
            },
            test: {
                src: ['www/js/base/constants.js', 'www/js/base/basedata.js'],
                overwrite: true,
                replacements: [
                    {
                        from: 'jymstoredev',
                        to: 'jymstoretest'
                    },
                    {
                        from: 'jymstoreproduct',
                        to: 'jymstoretest'
                    },
                    {
                        from: 'jym-dev-api',
                        to: 'jym-test-api'
                    },
                    {
                        from: 'jym-product-api',
                        to: 'jym-test-api'
                    },
                    {
                        from: 'jym-dev-ac',
                        to: 'jym-test-ac'
                    },
                    {
                        from: 'jym-product-ac',
                        to: 'jym-test-ac'
                    },
                    {
                        from: 'jym-dev-valicode',
                        to: 'jym-test-valicode'
                    },
                    {
                        from: 'jym-product-valicode',
                        to: 'jym-test-valicode'
                    },
                    {
                        from: 'jym-dev-auth',
                        to: 'jym-test-auth'
                    },
                    {
                        from: 'jym-product-auth',
                        to: 'jym-test-auth'
                    },
                    {
                        from: 'jym-product-oper',
                        to: 'jym-test-oper'
                    },
                    {
                        from: 'jym-dev-oper',
                        to: 'jym-test-oper'
                    },
                    {
                        from: 'jym-product-paymentmanager',
                        to: 'jym-test-paymentmanager'
                    },
                    {
                        from: 'jym-dev-paymentmanager',
                        to: 'jym-test-paymentmanager'
                    },
                    {
                        from:'jym-dev-coupon',
                        to:'jym-test-coupon'
                    },
                    {
                        from:'jym-product-coupon',
                        to:'jym-test-coupon'
                    },
                    {
                        from:'jym-dev-payment',
                        to:'jym-test-payment'
                    },
                    {
                        from:'jym-product-sftpayment',
                        to:'jym-test-payment'
                    },
                    {
                        from: /VERSION: .+/,
                        to: 'VERSION: \'<%= pkg.version %>\','
                    },
                    {
                        from: 'ENV: \'dev\'',
                        to: 'ENV: \'test\''
                    },
                    {
                        from: 'ENV: \'product\'',
                        to: 'ENV: \'test\''
                    },
                    {
                        from: 'https://www',
                        to: 'https://jym-web-test-www'
                    },
                    {
                        from: 'http://local-www',
                        to: 'https://jym-web-test-www'
                    },
                    {
                        from: 'https://jym-web-dev-www',
                        to: 'https://jym-web-test-www'
                    },
                    {
                        from: 'https://i',
                        to: 'https://jym-web-test-i'
                    },
                    {
                        from: 'http://local-i',
                        to: 'https://jym-web-test-i'
                    },
                    {
                        from: 'https://jym-web-dev-i',
                        to: 'https://jym-web-test-i'
                    },
                    {
                        from: 'https://welcome',
                        to: 'https://jym-web-test-welcome'
                    },
                    {
                        from: 'http://local-welcome',
                        to: 'https://jym-web-test-welcome'
                    },
                    {
                        from: 'https://jym-web-dev-welcome',
                        to: 'https://jym-web-test-welcome'
                    },
                    {
                        from: 'https://help',
                        to: 'https://jym-web-test-help'
                    },
                    {
                        from: 'http://local-help',
                        to: 'https://jym-web-test-help'
                    },
                    {
                        from: 'https://jym-web-dev-help',
                        to: 'https://jym-web-test-help'
                    },
                    {
                        from: 'https://cashier',
                        to: 'https://jym-web-test-cashier'
                    },
                    {
                        from: 'http://local-cashier',
                        to: 'https://jym-web-test-cashier'
                    },
                    {
                        from: 'https://jym-web-dev-cashier',
                        to: 'https://jym-web-test-cashier'
                    }
                ]
            },
            product: {
                src: ['www/js/base/constants.js', 'www/js/base/basedata.js'],
                overwrite: true,
                replacements: [
                    {
                        from: 'jymstoredev',
                        to: 'jymstoreproduct'
                    },
                    {
                        from: 'jymstoretest',
                        to: 'jymstoreproduct'
                    },
                    {
                        from: 'jym-dev-api',
                        to: 'jym-product-api'
                    },
                    {
                        from: 'jym-test-api',
                        to: 'jym-product-api'
                    },
                    {
                        from: 'jym-dev-ac',
                        to: 'jym-product-ac'
                    },
                    {
                        from: 'jym-test-ac',
                        to: 'jym-product-ac'
                    },
                    {
                        from: 'jym-dev-valicode',
                        to: 'jym-product-valicode'
                    },
                    {
                        from: 'jym-test-valicode',
                        to: 'jym-product-valicode'
                    },
                    {
                        from: 'jym-dev-auth',
                        to: 'jym-product-auth'
                    },
                    {
                        from: 'jym-test-auth',
                        to: 'jym-product-auth'
                    },
                    {
                        from: 'jym-test-oper',
                        to: 'jym-product-oper'
                    },
                    {
                        from: 'jym-dev-oper',
                        to: 'jym-product-oper'
                    },
                    {
                        from: 'jym-test-paymentmanager',
                        to: 'jym-product-paymentmanager'
                    },
                    {
                        from: 'jym-dev-paymentmanager',
                        to: 'jym-product-paymentmanager'
                    },
                    {
                        from:'jym-dev-coupon',
                        to:'jym-product-coupon'
                    },
                    {
                        from:'jym-test-coupon',
                        to:'jym-product-coupon'
                    },
                    {
                        from:'jym-test-payment',
                        to:'jym-product-sftpayment'
                    },
                    {
                        from:'jym-dev-payment',
                        to:'jym-product-sftpayment'
                    },
                    {
                        from: /VERSION: .+/,
                        to: 'VERSION: \'<%= pkg.version %>\','
                    },
                    {
                        from: 'ENV: \'dev\'',
                        to: 'ENV: \'product\''
                    },
                    {
                        from: 'ENV: \'test\'',
                        to: 'ENV: \'product\''
                    },
                    {
                        from: 'http://local-www',
                        to: 'https://www'
                    },
                    {
                        from: 'https://jym-web-dev-www',
                        to: 'https://www'
                    },
                    {
                        from: 'https://jym-web-test-www',
                        to: 'https://www'
                    },
                    {
                        from: 'http://local-i',
                        to: 'https://i'
                    },
                    {
                        from: 'https://jym-web-dev-i',
                        to: 'https://i'
                    },
                    {
                        from: 'https://jym-web-test-i',
                        to: 'https://i'
                    },
                    {
                        from: 'http://local-welcome',
                        to: 'https://welcome'
                    },
                    {
                        from: 'https://jym-web-dev-welcome',
                        to: 'https://welcome'
                    },
                    {
                        from: 'https://jym-web-test-welcome',
                        to: 'https://welcome'
                    },
                    {
                        from: 'http://local-help',
                        to: 'https://help'
                    },
                    {
                        from: 'https://jym-web-dev-help',
                        to: 'https://help'
                    },
                    {
                        from: 'https://jym-web-test-help',
                        to: 'https://help'
                    },
                    {
                        from: 'http://local-cashier',
                        to: 'https://cashier'
                    },
                    {
                        from: 'https://jym-web-dev-cashier',
                        to: 'https://cashier'
                    },
                    {
                        from: 'https://jym-web-test-cashier',
                        to: 'https://cashier'
                    }

                ]
            },
            pre: {
                src: ['www/js/base/constants.js', 'www/js/base/basedata.js'],
                overwrite: true,
                replacements: [
                    {
                        from: 'jymstoredev',
                        to: 'jymstoreproduct'
                    },
                    {
                        from: 'jymstoretest',
                        to: 'jymstoreproduct'
                    },
                    {
                        from: 'jym-dev-api',
                        to: 'jym-product-api'
                    },
                    {
                        from: 'jym-test-api',
                        to: 'jym-product-api'
                    },
                    {
                        from: 'jym-dev-ac',
                        to: 'jym-product-ac'
                    },
                    {
                        from: 'jym-test-ac',
                        to: 'jym-product-ac'
                    },
                    {
                        from: 'jym-dev-valicode',
                        to: 'jym-product-valicode'
                    },
                    {
                        from: 'jym-test-valicode',
                        to: 'jym-product-valicode'
                    },
                    {
                        from: 'jym-dev-auth',
                        to: 'jym-product-auth'
                    },
                    {
                        from: 'jym-test-auth',
                        to: 'jym-product-auth'
                    },
                    {
                        from: 'jym-test-oper',
                        to: 'jym-product-oper'
                    },
                    {
                        from: 'jym-dev-oper',
                        to: 'jym-product-oper'
                    },
                    {
                        from: 'jym-test-paymentmanager',
                        to: 'jym-product-paymentmanager'
                    },
                    {
                        from: 'jym-dev-paymentmanager',
                        to: 'jym-product-paymentmanager'
                    },
                    {
                        from:'jym-dev-coupon',
                        to:'jym-product-coupon'
                    },
                    {
                        from:'jym-test-coupon',
                        to:'jym-product-coupon'
                    },
                    {
                        from:'jym-test-payment',
                        to:'jym-product-sftpayment'
                    },
                    {
                        from:'jym-dev-payment',
                        to:'jym-product-sftpayment'
                    },
                    {
                        from: /VERSION: .+/,
                        to: 'VERSION: \'<%= pkg.version %>\','
                    },
                    {
                        from: 'ENV: \'dev\'',
                        to: 'ENV: \'product\''
                    },
                    {
                        from: 'ENV: \'test\'',
                        to: 'ENV: \'product\''
                    },
                    {
                        from: 'http://local-www',
                        to: 'https://jym-web-pre-www'
                    },
                    {
                        from: 'https://jym-web-dev-www',
                        to: 'https://jym-web-pre-www'
                    },
                    {
                        from: 'https://jym-web-test-www',
                        to: 'https://jym-web-pre-www'
                    },
                    {
                        from: 'http://local-i',
                        to: 'https://jym-web-pre-i'
                    },
                    {
                        from: 'https://jym-web-dev-i',
                        to: 'https://jym-web-pre-i'
                    },
                    {
                        from: 'https://jym-web-test-i',
                        to: 'https://jym-web-pre-i'
                    },
                    {
                        from: 'http://local-welcome',
                        to: 'https://jym-web-pre-welcome'
                    },
                    {
                        from: 'https://jym-web-dev-welcome',
                        to: 'https://jym-web-pre-welcome'
                    },
                    {
                        from: 'https://jym-web-test-welcome',
                        to: 'https://jym-web-pre-welcome'
                    },
                    {
                        from: 'http://local-help',
                        to: 'https://jym-web-pre-help'
                    },
                    {
                        from: 'https://jym-web-dev-help',
                        to: 'https://jym-web-pre-help'
                    },
                    {
                        from: 'https://jym-web-test-help',
                        to: 'https://jym-web-pre-help'
                    },
                    {
                        from: 'http://local-cashier',
                        to: 'https://jym-web-pre-cashier'
                    },
                    {
                        from: 'https://jym-web-dev-cashier',
                        to: 'https://jym-web-pre-cashier'
                    },
                    {
                        from: 'https://jym-web-test-cashier',
                        to: 'https://jym-web-pre-cashier'
                    }

                ]
            },
            devad: {
                src: ['www/js/base/constants.js', 'www/js/base/basedata.js'],
                overwrite: true,
                replacements: [
                    {
                        from: 'jymstoretest',
                        to: 'jymstoredev'
                    },
                    {
                        from: 'jymstoreproduct',
                        to: 'jymstoredev'
                    },
                    {
                        from: 'jym-test-api',
                        to: 'api.dev.ad'
                    },
                    {
                        from: 'jym-dev-api',
                        to: 'api.dev.ad'
                    },
                    {
                        from: 'jym-product-api',
                        to: 'api.dev.ad'
                    },
                    {
                        from: 'http://10.1.10.36/Jinyinmao.Tirisfal.Api',
                        to: 'https://api.dev.ad.jinyinmao.com.cn'
                    },
                    {
                        from: 'jym-test-ac',
                        to: 'ac.dev.ad'
                    },
                    {
                        from: 'jym-dev-ac',
                        to: 'ac.dev.ad'
                    },
                    {
                        from: 'jym-product-ac',
                        to: 'ac.dev.ad'
                    },
                    {
                        from: 'jym-test-valicode',
                        to: 'valicode.dev.ad'
                    },
                    {
                        from: 'jym-dev-valicode',
                        to: 'valicode.dev.ad'
                    },
                    {
                        from: 'jym-product-valicode',
                        to: 'valicode.dev.ad'
                    },
                    {
                        from: 'jym-test-auth',
                        to: 'auth.dev.ad'
                    },
                    {
                        from: 'jym-dev-auth',
                        to: 'auth.dev.ad'
                    },
                    {
                        from: 'jym-product-auth',
                        to: 'auth.dev.ad'
                    },
                    {
                        from: 'jym-product-oper',
                        to: 'oper.dev.ad'
                    },
                    {
                        from: 'jym-dev-oper',
                        to: 'oper.dev.ad'
                    },
                    {
                        from: 'jym-test-oper',
                        to: 'oper.dev.ad'
                    },
                    {
                        from: 'jym-product-paymentmanager',
                        to: 'paymentmanager.dev.ad'
                    },
                    {
                        from: 'jym-test-paymentmanager',
                        to: 'paymentmanager.dev.ad'
                    },
                    {
                        from: 'jym-dev-paymentmanager',
                        to: 'paymentmanager.dev.ad'
                    },
                    {
                        from:'jym-test-coupon',
                        to:'coupon.dev.ad'
                    },
                    {
                        from:'jym-dev-coupon',
                        to:'coupon.dev.ad'
                    },
                    {
                        from:'jym-product-coupon',
                        to:'coupon.dev.ad'
                    },
                    {
                        from:'jym-test-payment',
                        to:'payment.dev.ad'
                    },
                    {
                        from:'jym-dev-payment',
                        to:'payment.dev.ad'
                    },
                    {
                        from:'jym-product-sftpayment',
                        to:'payment.dev.ad'
                    },
                    {
                        from: /VERSION: .+/,
                        to: 'VERSION: \'<%= pkg.version %>\','
                    },
                    {
                        from: 'ENV: \'test\'',
                        to: 'ENV: \'dev\''
                    },
                    {
                        from: 'ENV: \'product\'',
                        to: 'ENV: \'dev\''
                    },
                    {
                        from: 'https://www.jinyinmao',
                        to: 'https://www.dev.ad.jinyinmao'
                    },
                    {
                        from: 'http://local-www',
                        to: 'https://www.dev.ad'
                    },
                    {
                        from: 'https://jym-web-test-www',
                        to: 'https://www.dev.ad'
                    },
                    {
                        from: 'https://jym-web-dev-www',
                        to: 'https://www.dev.ad'
                    },
                    {
                        from: 'https://welcome.jinyinmao',
                        to: 'https://welcome.dev.ad.jinyinmao'
                    },
                    {
                        from: 'https://jym-web-test-welcome',
                        to: 'https://welcome.dev.ad'
                    },
                    {
                        from: 'http://local-welcome',
                        to: 'https://welcome.dev.ad'
                    },
                    {
                        from: 'https://jym-web-dev-welcome',
                        to: 'https://welcome.dev.ad'
                    },
                    {
                        from: 'https://help.jinyinmao',
                        to: 'https://help.dev.ad.jinyinmao'
                    },
                    {
                        from: 'https://jym-web-test-help',
                        to: 'https://help.dev.ad'
                    },
                    {
                        from: 'http://local-help',
                        to: 'https://jym-web-dev-help'
                    },
                    {
                        from: 'https://jym-web-dev-help',
                        to: 'https://help.dev.ad'
                    },
                    {
                        from: 'https://cashier.jinyinmao',
                        to: 'https://cashier.dev.ad.jinyinmao'
                    },
                    {
                        from: 'https://jym-web-test-cashier',
                        to: 'https://cashier.dev.ad'
                    },
                    {
                        from: 'http://local-cashier',
                        to: 'https://cashier.dev.ad'
                    },
                    {
                        from: 'https://jym-web-dev-cashier',
                        to: 'https://cashier.dev.ad'
                    },
                    {
                        from: 'https://i.jinyinmao',
                        to: 'https://i.dev.ad.jinyinmao'
                    },
                    {
                        from: 'https://jym-web-test-i',
                        to: 'https://i.dev.ad'
                    },
                    {
                        from: 'http://local-i',
                        to: 'https://i.dev.ad'
                    },
                    {
                        from: 'https://jym-web-dev-i',
                        to: 'https://i.dev.ad'
                    }

                ]
            }
        },
        less: {
            build: {
                files: [{
                    expand: true,
                    cwd: 'www/less',
                    src: ['**/*.less'],
                    dest: 'www/css',
                    ext: '.css'
                }]
            }
        },
        jshint: {
            all: [
                'www/js/**/*.js'
            ],
            options: {
                browser: true,
                devel: true
            }
        },
        uglify: {
            main: {
                options: {
                    mangle: {
                        except: ["jquery", "lodash", "moment", "bootstrap"]
                    }
                },
                files: [
                    {
                        expand: true,
                        cwd: "../../dist/release/jinyinmao.web.new/js",
                        src: "**/*.js",
                        dest: "../../dist/release/jinyinmao.web.new/js"
                    },
                    {
                        expand: true,
                        cwd: "../../dist/test/jinyinmao.web.new/js",
                        src: "**/*.js",
                        dest: "../../dist/test/jinyinmao.web.new/js"
                    },
                    {
                        expand: true,
                        cwd: "../../dist/dev/jinyinmao.web.new/js",
                        src: "**/*.js",
                        dest: "../../dist/dev/jinyinmao.web.new/js"
                    } ,
                    {
                        expand: true,
                        cwd: "../../dist/pre/jinyinmao.web.new/js",
                        src: "**/*.js",
                        dest: "../../dist/pre/jinyinmao.web.new/js"
                    }
                ]
            }
        },
        watch: {
            less: {
                files: ['www/less/**/*.less'],
                tasks: ['less'],
                options: { livereload: false }
            },
            dev: {
                files: ['www/js/**/*.js'],
                tasks: ['dev']
            }
        },
        clean: {
            build: ['dist']
        },
        copy: {
            options: {
                timestamp: true
            },
            deploy: {
                expand: true,
                cwd: 'www/',
                src: ['**/*'],
                dest: '../../dist/release/jinyinmao.web.new'
            },
            test: {
                expand: true,
                cwd: 'www/',
                src: ['**/*'],
                dest: '../../dist/test/jinyinmao.web.new'
            },
            dev: {
                expand: true,
                cwd: 'www/',
                src: ['**/*'],
                dest: '../../dist/dev/jinyinmao.web.new'
            },
            pre: {
                expand: true,
                cwd: 'www/',
                src: ['**/*'],
                dest: '../../dist/pre/jinyinmao.web.pre'
            }
        },
        tmod: {
            template: {
                src: '/tpl/src/**/*.html',
                dest: './dist/template.js',
                options: {
                    base: './tpl/src'
                }
            }
        }
    });

    grunt.registerTask('default', ['watch:dev', 'watch:less']);

    grunt.registerTask('less', ['less:build']);
    grunt.registerTask('tmod', ['tmod']);

    grunt.registerTask('dev', ['dev-js']);
    grunt.registerTask('dev-js', ['jshint:all']);

    grunt.registerTask('prepare', ['exec:npmUpdate', 'mbower:clean', 'mbower:install']);

    grunt.registerTask('pre-local-build', ['replace:local']);
    grunt.registerTask('pre-dev-build', ['replace:dev']);
    grunt.registerTask('pre-test-build', ['replace:test']);
    grunt.registerTask('pre-product-build', ['replace:product']);
    grunt.registerTask('pre-devad-build', ['replace:devad']);
    grunt.registerTask('pre-pre-build', ['replace:pre']);

    grunt.registerTask('ver', ['bump', 'replace:ver']);

    grunt.registerTask('to-local', ['pre-local-build']);
    grunt.registerTask('to-dev', ['pre-dev-build']);
    grunt.registerTask('to-test', ['pre-test-build']);
    grunt.registerTask('to-product', ['pre-product-build']);
    grunt.registerTask('to-devad', ['pre-devad-build']);
    grunt.registerTask('to-pre', ['pre-pre-build']);


    grunt.registerTask('build', ['dev', 'clean', 'ver', 'to-test', 'copy:test', 'to-product', 'copy:deploy', 'uglify', 'to-local']);
    grunt.registerTask('build-devad', ['dev', 'clean', 'ver', 'to-devad', 'copy:dev', 'to-dev',  'uglify', 'to-local']);

    // These plugins provide necessary tasks.
    require('load-grunt-tasks')(grunt, {
        scope: 'devDependencies'
    });
    require('time-grunt')(grunt);
};


