<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Insert title here</title>
</head>
<body>
    <%
    request.setCharacterEncoding("utf-8");
    request.getParameter("uname");
    request.getParameter("upwd");
    if(name.equals("123")&&pwd.equals("abc")){
        response.sendRedirect("success.jsp")
    }else{
        //登录失败
        out.print("用户名或密码有误")
    }
    %>
</body>
</html>
