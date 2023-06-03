import {
    BlackBgTitleBar,
    NewOrderSection,
    NewOrderSectionContainer,
    NewOrderSectionFormContainer,
} from "@/components/shared/StyledComponents";
import Container from "@/components/widgets/Container";
import { Input, Option, Radio, Select, Textarea } from "@material-tailwind/react";
import React from "react";

const NewOrder = () => {
    return (
        <Container>
            {/* Section One */}
            <NewOrderSectionContainer>
                <NewOrderSection>
                    <BlackBgTitleBar>المعلومات الاساسية</BlackBgTitleBar>
                    <NewOrderSectionFormContainer>
                        <Input size="md" label="الراتب/Salary" />
                        <Input size="md" label="Salary deposit bank/بنك الإيداع الراتب" />
                        <Input size="md" label="رقم الهاتف/Phone" />
                        <Input size="md" label="اسم العميل/ Client name" />
                        <Input size="md" label="تاريخ الطلب/Order Date" />
                        <Input size="md" label="OrderNo/رقم الطلب" />
                        <Input size="md" label="العمر/old" />
                        <Input size="md" label="Employer/جهة العمل" />
                        <Input size="md" label="الخدمة المطلوبةService Type" />
                        <Input size="md" label="value of the property(Option)" />
                    </NewOrderSectionFormContainer>
                </NewOrderSection>

                {/* Section Two */}
                <NewOrderSection>
                    <BlackBgTitleBar>المعلومات واكمال المستندات</BlackBgTitleBar>
                    <NewOrderSectionFormContainer>
                        <Input size="md" label="قسط الدعمPremium support" />
                        <Input size="md" label="القسطinstallment" />
                        <Input size="md" label="التمويل الشخصيpersonal finance" />
                        <Input size="md" label="التمويل العقاري/Mortgage" />
                        <Input size="md" label="duration/المدة" />
                        <Input size="md" label="موظف البنك/Bank employee" />
                        {/* Dropdown */}
                        <Select label="funded bank/البنك الممول">
                            <Option>نوع العقارtype of property</Option>
                            <Option>نوع العقارtype of property</Option>
                            <Option>نوع العقارtype of property</Option>
                            <Option>نوع العقارtype of property</Option>
                            <Option>نوع العقارtype of property</Option>
                        </Select>
                        <Input size="md" label="الموظف المتابعfollow-up employee" />
                        <Input size="md" label="المشرفadmin" />
                        <Input size="md" label="هوية العميلClient ID" />
                        <Input size="md" label="قيم العقار الاصليoriginal property values" />
                        {/* Dropdown */}
                        <Select label="نوع العقارtype of property">
                            <Option>نوع العقارtype of property</Option>
                            <Option>نوع العقارtype of property</Option>
                            <Option>نوع العقارtype of property</Option>
                            <Option>نوع العقارtype of property</Option>
                            <Option>نوع العقارtype of property</Option>
                        </Select>
                        {/* Dropdown */}
                        <Select label="requested service/الخدمة المطلوبة">
                            <Option>نوع العقارtype of property</Option>
                            <Option>نوع العقارtype of property</Option>
                            <Option>نوع العقارtype of property</Option>
                            <Option>نوع العقارtype of property</Option>
                            <Option>نوع العقارtype of property</Option>
                        </Select>

                        {/* Radio Button */}
                        <div className="flex ">
                            <Radio id="html" name="type" label="يوجد ضامن" />
                            <Radio id="react" name="type" label="لا يوجد ضامن" defaultChecked />
                        </div>

                        {/* Dropdown */}
                        <Select label="Knowing the customer ">
                            <Option>نوع العقارtype of property</Option>
                            <Option>نوع العقارtype of property</Option>
                            <Option>نوع العقارtype of property</Option>
                            <Option>نوع العقارtype of property</Option>
                            <Option>نوع العقارtype of property</Option>
                        </Select>

                        {/* Dropdown */}
                        <Select label="مدينة العقار city of the property">
                            <Option>نوع العقارtype of property</Option>
                            <Option>نوع العقارtype of property</Option>
                            <Option>نوع العقارtype of property</Option>
                            <Option>نوع العقارtype of property</Option>
                            <Option>نوع العقارtype of property</Option>
                        </Select>

                        <Input size="md" label="جوال المالك/Owner phone" />
                    </NewOrderSectionFormContainer>
                    <Textarea label="Explain the client's situation/شرح حالة العميل" />
                </NewOrderSection>
            </NewOrderSectionContainer>
        </Container>
    );
};

export default NewOrder;
