package com.walmart.services.mpp.ui.util;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.walmart.mpportal.delegator.core.ExecutionDelegator;
import com.walmart.mpportal.delegator.core.IUCService;
import com.walmart.mpportal.delegator.core.UCFactory;


public class AjaxServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
   
    public AjaxServlet() {
        super();
        
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
		String SERVICE_KEY = request.getParameter("SERVICE_KEY");
		
		String payload = request.getParameter("payload");
	
		String customerId = request.getParameter("customer_id");
		
		String serviceResponse = null;
		try{
		IUCService s = UCFactory.createInstance(SERVICE_KEY);
		serviceResponse = ExecutionDelegator.invoke(s, SERVICE_KEY, payload,customerId);
		
		}catch(Throwable e){
			e.printStackTrace();
			String errorMessage =  "{\"status\":\"FAIL\",\"header\":{\"headerAttributes\":{}},\"errors\":[{\"code\":\"500\",\"description\":\"Internal Server Error\",\"severity\":\"ERROR\",\"category\":\"UCLAYER_FAILURE\"],\"payload\":null}";
			PrintWriter out = response.getWriter();
			response.setContentType("application/json");
			out.write(errorMessage);
			return;
		}
		
		 PrintWriter out = response.getWriter();
		 response.setContentType("application/json");
		 out.write(serviceResponse);
		
	}

}
