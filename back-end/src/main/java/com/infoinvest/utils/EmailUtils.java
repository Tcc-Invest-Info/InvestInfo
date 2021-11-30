package com.infoinvest.utils;

import java.util.Date;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

public class EmailUtils {

	private static String emailSend = System.getenv("emailSend");
	private static String passwordEmail = System.getenv("passwordEmail");

	public static void enviarEmail(String email, String nome, String senha) {

		Properties props = new Properties();
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.socketFactory.port", "465");
		props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
		props.put("mail.smtp.port", "465");

		Session session = Session.getInstance(props, new javax.mail.Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(emailSend, passwordEmail);
			}
		});

		try {
			MimeMessage msg = new MimeMessage(session);
			msg.setFrom(new InternetAddress(emailSend));
			InternetAddress[] address = { new InternetAddress(email) };
			msg.setRecipients(Message.RecipientType.TO, address);
			msg.setSentDate(new Date());
			msg.setSubject("InvestInfo - Atualização de senha");

			MimeBodyPart mbp1 = new MimeBodyPart();
			mbp1.setText("Olá " + nome + "\n\n" + "Segue a nova senha: " + senha
					+ "\n\nQualquer problema ou dúvida, estamos a disposição");

			Multipart mp = new MimeMultipart();
			mp.addBodyPart(mbp1);
			msg.setContent(mp);

			Transport.send(msg);

		} catch (MessagingException e) {
			throw new RuntimeException(e);
		}
	}
}
