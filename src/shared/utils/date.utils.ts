import moment from "moment";
import { DateEnum } from "../constants/enums/date.enum";
import { LocaleEnum } from "../constants/enums/locale.enum";

export const fromNow = (raw_date: string) => {
    return moment(raw_date, DateEnum.UTC_FORMAT).locale(LocaleEnum.SPANISH).fromNow()
}