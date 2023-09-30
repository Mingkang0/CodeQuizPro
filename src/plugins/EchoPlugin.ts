import { WebPlugin } from '@capacitor/core';

import type { HuaweiAuthPlugin } from './HuaweiAuth';
import HuaweiAuth from './HuaweiAuth';

export class HuaweiAuthServicePluginWeb extends WebPlugin implements HuaweiAuthPlugin {
    async signInWithHuawei(): Promise<{ value: string }> {
        return Promise.resolve({ value: 'Web' });
    }

    async echo(){
        try {
            return { message: 'Yes during login' };
        } catch (error) {
            console.error('Error during Huawei Auth Service login:', error);
            return { message: 'Error during login' };
        }
    }
}
