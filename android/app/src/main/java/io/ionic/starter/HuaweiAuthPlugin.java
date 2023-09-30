package io.ionic.starter;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "HuaweiAuthPlugin")
public class HuaweiAuthPlugin extends Plugin {
    public void signInWithHuawei(PluginCall call){
        JSObject ret = new JSObject();
        ret.put("login", 123);
        call.resolve(ret);
    }
}
