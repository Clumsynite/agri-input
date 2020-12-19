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
import { json2csvAsync } from "json-2-csv";
import ProductTable from "../Templates/ProductTable";

const OrderList = (props) => {
  const { orders } = props;

  const downloadName = (key) => {
    return "RFQList_" + key.split("Y")[1];
  };

  const downloadAsCSV = async (array, filename) => {
    try {
      const csv = await json2csvAsync(array);
      const element = document.createElement("a");
      const file = new Blob([csv], {
        type: "text/csv",
      });
      element.href = URL.createObjectURL(file);
      element.download = `${filename}.csv`;
      document.body.appendChild(element);
      element.click();
    } catch (error) {
      console.error(error);
    }
  };

  const orderList = orders.map((order, index) => {
    return (
      <AccordionItem className="accordion-item" key={order.key} uuid={index}>
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
            <div
              className="accordion-button-csv"
              onClick={(e) => {
                e.stopPropagation();
                downloadAsCSV(order.products, downloadName(order.key));
              }}
            >
              <InlineIcon icon={fileTypeExcel} width={40} height={40} />
              <span style={{ padding: "0 5px" }}>
                {downloadName(order.key)}
              </span>
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
        padding: 15,
      }}
      allowZeroExpanded={true}
      preExpanded={[0]}
    >
      {orderList}
    </Accordion>
  );
};

export default OrderList;
