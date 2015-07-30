<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>

<jsp:useBean class="java.lang.String" id="addNameUrl" scope="request" />

<portlet:defineObjects />

This is the <b>Hello Portlet</b> portlet in Edit mode.


<form
		id = "<portlet:namespace />helloForm"
		action="<%=addNameUrl %>"
		method="post">
		<table>
			<tr>
			<td>Name:</td>
			<td><input type="text" name="username"></td>
			</tr>
		</table>
		<input type="submit" id="nameButton" title="Add Name" value="Add Name">
	</form>