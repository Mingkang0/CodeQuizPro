import { registerPlugin } from '@capacitor/core';

export interface HuaweiAuthPlugin {
    signInWithHuawei(): Promise<{ value: string }>;
}

const HuaweiAuth = registerPlugin('HuaweiAuthPlugin');

export default HuaweiAuth;