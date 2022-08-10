package saxparser;

import entity.Staff;
import org.xml.sax.Attributes;
import org.xml.sax.helpers.DefaultHandler;

import java.util.ArrayList;
import java.util.List;

public class PrintAllHandlerSax extends DefaultHandler {
    StringBuilder content = new StringBuilder();
    private static List<Staff> staffList = new ArrayList<>();
    private Staff staff;

    @Override
    public void startElement(String uri, String localName,
            String qName, Attributes attributes) {
        //if(qName != null && qName.equals("staff"))
        if("staff".equals(qName)) {
            staff = new Staff();
            String id = attributes.getValue("id");
            staff.setId(Integer.parseInt(id));
            System.out.println("Staff id: " + id);
        } else if("salary".equals(qName)) {
            String currency = attributes.getValue("currency");
            System.out.println("currency: " + currency);
        }
        content.setLength(0);
    }

    @Override
    public void endElement(String uri,  String localName, String qName) {
        if("firstname".equals(qName)) {
            System.out.println("firstname: " + content.toString());
        } else if("lastname".equals(qName)) {
            System.out.println("lastname: " + content.toString());
        }
    }

    @Override
    public void characters(char ch[], int start, int length) {
        content.append(ch, start, length);
    }
}
