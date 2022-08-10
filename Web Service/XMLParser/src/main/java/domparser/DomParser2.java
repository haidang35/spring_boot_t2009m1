package domparser;

import org.w3c.dom.Document;
import org.xml.sax.SAXException;

import javax.xml.XMLConstants;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.net.URLConnection;

public class DomParser2 {
    private static final String FILENAME = "staff.xml";

    public static void main(String[] args) {
        try {
            URLConnection conn = new URL("https://api.openweathermap.org/data/2.5/weather?q=saigon,vn&APPID=66d9be5f6f21f670ac388097b92353d5&mode=xml").openConnection();
            DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();

            // unknown XML better turn on this
            dbf.setFeature(XMLConstants.FEATURE_SECURE_PROCESSING, true);
            DocumentBuilder dBuilder = dbf.newDocumentBuilder();
            InputStream is = conn.getInputStream();
            Document doc = dBuilder.parse(is);

            System.out.println("THanh pho x co nhiet do hien tai la y do c");
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ParserConfigurationException e) {
            e.printStackTrace();
        } catch (SAXException e) {
            e.printStackTrace();
        }


    }
}
