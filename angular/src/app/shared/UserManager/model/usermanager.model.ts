import { IdentityUserCreateOrUpdateDtoBase} from '@proxy/volo/abp/identity'


export class UserData {
    id?: any;
    header: string;
    param?: IdentityUserCreateOrUpdateDtoBase;
    active: string
}