package io.ionic.starter;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.huawei.agconnect.auth.AGConnectAuth;
import com.huawei.agconnect.auth.AGConnectAuthCredential;
import com.huawei.agconnect.auth.AGConnectUser;
import com.huawei.agconnect.auth.HwIdAuthProvider;
import com.huawei.agconnect.auth.SignInResult;
import com.huawei.hmf.tasks.OnFailureListener;
import com.huawei.hmf.tasks.OnSuccessListener;

public class signInWithHuawei extends Plugin{
    private void signInWithHuawei(PluginCall call) {
        AGConnectAuth.getInstance().signIn(HwIdAuthProvider.credentialWithToken("ACCESS_TOKEN"))
                .addOnSuccessListener(signInResult -> {
                        // Handle successful sign-in
                        JSObject result = new JSObject();
                        result.put("message", "Sign-in successful");
                        call.success(result);
                })
                .addOnFailureListener(e -> {
                    // Handle sign-in failure
                    call.error("Sign-in failed: " + e.getMessage(), null);
                });

    }
}
