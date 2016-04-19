var IdleTimeout = function () {

    return {

        //main function to initiate the module
        init: function (keepLoginRequest,reLoginResponse) {

            // cache a reference to the countdown element so we don't have to query the DOM for it on each ping.
            var $countdown;

            $('body').append('<div class="modal fade" id="idle-timeout-dialog" data-backdrop="static"><div><div class="modal-content"><div class="modal-header"><h4 class="modal-title">您的会话即将到期.</h4></div><div class="modal-body"><p><i class="fa fa-warning"></i> 您的会话将在 <span id="idle-timeout-counter"></span> 秒后过期.</p></div><div class="modal-footer"><button id="idle-timeout-dialog-logout" type="button" class="btn btn-default">重新登录</button><button id="idle-timeout-dialog-keepalive" type="button" class="btn btn-primary" data-dismiss="modal">保持会话</button></div></div></div></div>');
                    
            // start the idle timer plugin
            $.idleTimeout('#idle-timeout-dialog', '.modal-content button:last', {
                idleAfter: 600,//空闲时间 秒
                timeout: 30000,//超时时间 毫秒
                pollingInterval: 20,
                keepAliveURL: keepLoginRequest,
                serverResponseEquals: 'OK',
                onTimeout: function(){
                    window.location = reLoginResponse;
                },
                onIdle: function(){
                    $('#idle-timeout-dialog').modal('show');
                    $countdown = $('#idle-timeout-counter');

                    $('#idle-timeout-dialog-keepalive').on('click', function () { 
                        $('#idle-timeout-dialog').modal('hide');
                    });

                    $('#idle-timeout-dialog-logout').on('click', function () { 
                        $('#idle-timeout-dialog').modal('hide');
                        $.idleTimeout.options.onTimeout.call(this);
                    });
                },
                onCountdown: function(counter){
                    $countdown.html(counter); // update the counter
                }
            });
            
        }

    };

}();