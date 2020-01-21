package com.example.mail;

import java.io.Console;

import javax.mail.Message;

import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;





public class MailMethod {
	private static Logger logger=LoggerFactory.getLogger(MailMethod.class);
	
	public static void sendMail(String email, String message1 , String subject , String content) {

		java.util.Properties properties = new java.util.Properties();
		properties.put("mail.smtp.auth", "true");
		properties.put("mail.smtp.starttls.enable", "true");
		javax.mail.Session mailSession = javax.mail.Session.getInstance(properties);

		try {
			MimeMessage message = new MimeMessage(mailSession);

			message.setContent(content+"<h1>"+message1+"</h1>", "text/html");
			message.setSubject(subject);

			InternetAddress sender = new InternetAddress("bookspot21@gmail.com", "Book Spot");
			InternetAddress receiver = new InternetAddress(email);
			message.setFrom(sender);
			message.setRecipient(Message.RecipientType.TO, receiver);
			message.saveChanges();

			javax.mail.Transport transport = mailSession.getTransport("smtp");
			transport.connect("smtp.gmail.com", 587, "bookspot21@gmail.com" , "bookspot@123");
			transport.sendMessage(message, message.getAllRecipients());
			transport.close();

		} catch (Exception e) {
			System.out.println(e);
			logger.error("error while sending mail");
		}

	}


}
