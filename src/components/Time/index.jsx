import React from 'react';
import {formatDistanceToNow} from "date-fns"
import ruLocale from "date-fns/locale/ru"


import "./Time.scss"

const Time = ({ date}) => formatDistanceToNow(new Date(date), {
            addSuffix: true,
            locale: ruLocale})

export default Time;