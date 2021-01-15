import { all } from "redux-saga/effects"
import numberTask from "./number"
import studentTask from "./student"
/**
* saga任务
*/
export default function* () {
    yield all([numberTask(), studentTask()])
    console.log("saga 完成")
}