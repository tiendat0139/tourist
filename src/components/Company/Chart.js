import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Label} from "recharts";

const Chart = ({stroke, fill, ...props}) => {
    return (
        <AreaChart {...props}>
            <CartesianGrid strokeDasharray="3 5"/>
            <XAxis tickLine={false} dataKey="name" fontSize={12} fontWeight={600} />
            <YAxis tickLine={false}tick={false}>
                <Label value="Sales" angle={-90}/>
            </YAxis>
            <Tooltip />
            <Area type="monotone"  dataKey="month" stroke = {stroke} fill = {fill}/>
        </AreaChart>
    )
}
export default Chart