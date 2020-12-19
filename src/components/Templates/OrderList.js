import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import ProductTable from "../Templates/ProductTable";
import "react-accessible-accordion/dist/fancy-example.css";

const OrderList = (props) => {
  const { orders } = props;

  const orderList = orders.map((order) => {
    return (
      <AccordionItem className="accordion-item" key={order.key}>
        <AccordionItemHeading>
          <AccordionItemButton className="accordion-button">
            {order.key}
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="accordion-panel">
          <ProductTable products={order.products} />
        </AccordionItemPanel>
      </AccordionItem>
    );
  });
  return (
    <Accordion style={{ width: "82%", border: "none", padding: 20, transition: "0.5s ease-in-out" }}>{orderList}</Accordion>
  );
};

export default OrderList;
