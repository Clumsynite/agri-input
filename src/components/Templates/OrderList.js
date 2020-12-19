import { InlineIcon } from "@iconify/react";
import fileTypeExcel from "@iconify-icons/vscode-icons/file-type-excel";
import downloadIcon from "@iconify-icons/icons8/download";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import ProductTable from "../Templates/ProductTable";

const OrderList = (props) => {
  const { orders } = props;

  const downloadName = (key) => {
    return "RFQList_" + key.split("Y")[1];
  };

  const orderList = orders.map((order) => {
    return (
      <AccordionItem className="accordion-item" key={order.key}>
        <AccordionItemHeading>
          <AccordionItemButton className="accordion-button">
            <div className="accordion-button-key">{order.key}</div>
            <span className="accordion-button-divider">|</span>
            <div className="accordion-button-user">
              <div className="user-avatar">
                <img
                  src={order.batchedBy.avatar}
                  alt="User Avatar"
                  width={40}
                  height={40}
                />
              </div>
              <div className="user-details">
                <div className="user-name">{order.batchedBy.name}</div>
                <div className="user-date">{order.batchedBy.date}</div>
              </div>
            </div>
            <span className="accordion-button-divider">|</span>
            <div className="accordion-button-csv">
              <InlineIcon icon={fileTypeExcel} width={40} height={40} />
              {downloadName(order.key)}
              <InlineIcon icon={downloadIcon} width={40} height={40} />
            </div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="accordion-panel">
          <ProductTable products={order.products} />
        </AccordionItemPanel>
      </AccordionItem>
    );
  });
  return (
    <Accordion
      style={{
        width: "82%",
        border: "none",
        padding: 20,
        transition: "0.5s ease-in-out",
      }}
    >
      {orderList}
    </Accordion>
  );
};

export default OrderList;
