const appkey = "demo13_1545210570249";
export async function getAllStudents() {
  return await fetch(`http://api.duyiedu.com/api/student/findAll?appkey=${appkey}`)
    .then(res => res.json())
    .then(res => res.data)
}
export async function getStudents(page, limit) {
  return await fetch(`http://api.duyiedu.com/api/student/findByPage?appkey=${appkey}&page=${page}&size=${limit}`)
    .then(resp => resp.json()).then(resp => resp.data);
}

export async function searchStudents({ page = 1, limit = 10, key = "", sex = -1 } = {}) {
  if (key) {
    // 搜索
    const resp = await fetch(`http://api.duyiedu.com/api/student/searchStudent?appkey=${appkey}&page=${page}&size=${limit}&search=${key}&sex=${sex}`)
      .then(resp => resp.json())
      .then(resp => resp.data);
    resp.datas = resp.searchList;
    delete resp.searchList;
    return resp;
  } else {
    const resp = await getStudents(page, limit);
    resp.datas = resp.findByPage;
    delete resp.findByPage;
    return resp;
  }
}