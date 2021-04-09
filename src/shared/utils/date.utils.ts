import moment from "moment";
import { DateEnum } from "../constants/enums/date.enum";
import { LocaleEnum } from "../constants/enums/locale.enum";

export const fromNow = (raw_date: string) => {
    return moment(raw_date, DateEnum.UTC_FORMAT)
        .subtract(5, 'hours')
        .locale(LocaleEnum.SPANISH).fromNow()
}

export const fullDate = (raw_date: string) => {
    return moment(raw_date, DateEnum.UTC_FORMAT)
        .subtract(5, 'hours')
        .locale(LocaleEnum.SPANISH)
        .format(DateEnum.FULL_DATE)
}