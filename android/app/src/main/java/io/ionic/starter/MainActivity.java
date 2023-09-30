package io.ionic.starter;

import com.getcapacitor.BridgeActivity;
import android.os.Bundle;
import com.huawei.hms.js.account.HMSAccount;
import com.huawei.agconnect.auth.HwIdAuthProvider;
public class MainActivity extends BridgeActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        registerPlugin(HuaweiAuthPlugin.class);
        registerPlugin(HMSAccount.class);

    }
}

