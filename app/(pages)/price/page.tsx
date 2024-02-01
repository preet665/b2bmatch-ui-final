import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Footer from "@/components/footer";

export default function GTC() {
  return (
    <>
      <div className="bg-secondary flex flex-col text-center justify-center items-center">
        <div className="w-full  max-h-screen overflow-auto">
          <span className="text-5xl mt-5 font-bold pl-6">
            <h1 className="bg-gradient-to-r from-green-600 via-violet-900-500 to-green-950 inline-block text-transparent bg-clip-text mt-3">
              Services
            </h1>
          </span>
          <div className="h-fit flex justify-center items-center w-fit p-40 ml-24">
            <Tabs defaultValue="CH-de addresses" className="w-[1000px]  text-xl">
              <TabsList className="grid w-full grid-cols-4 mb-2">
                <TabsTrigger className="text-lg p-0  " value="CH-de addresses" >
                  CH-de addresses
                </TabsTrigger>
                <TabsTrigger className="text-lg p-0 " value="Sale of company">
                  Sale of company
                </TabsTrigger>
                <TabsTrigger className="text-lg p-0 " value="Market analysis">
                  Market analysis
                </TabsTrigger>
                <TabsTrigger className="text-lg p-0 " value="Customer value (analysis)">
                  Customer value (analysis)
                </TabsTrigger>
              </TabsList>
              <TabsContent value="CH-de addresses">
                <Card>
                  <CardHeader>
                    <CardTitle>
                      Individual contact information for CH-de companies :
                    </CardTitle>
                    <CardDescription className="text-xl p-10">
                      You know what you are looking for and just need the right
                      information from us. We would be happy to provide you with
                      this information according to your specifications.
                    </CardDescription>
                  </CardHeader>
                  
                </Card>
              </TabsContent>
              <TabsContent value="Sale of company">
                <Card>
                  <CardHeader>
                    <CardTitle>CH-de addresses :</CardTitle>
                    <CardDescription className="text-xl p-10">
                      The most difficult part of selling a business is finding
                      suitable buyers. We would be happy to support you in this
                      area.
                    </CardDescription>
                  </CardHeader>
                  
                </Card>
              </TabsContent>
              <TabsContent value="Market analysis">
                <Card>
                  <CardHeader>
                    <CardTitle>Market research rethought :</CardTitle>
                    <CardDescription className="text-xl p-10">
                      Our database (AI/AI) understands our search queries. This
                      means that we receive completely new answers. I have been
                      working in market research for 30 years and I would never
                      have thought something like this was possible. In short,
                      we analyze and visualize your search queries and results.
                      Investigative if necessary.
                    </CardDescription>
                  </CardHeader>
                  
                </Card>
              </TabsContent>
              <TabsContent value="Customer value (analysis)">
                <Card>
                  <CardHeader>
                    <CardTitle>Find new, comparable customers :</CardTitle>
                    <CardDescription className="text-xl p-10">
                      Based on a customer value analysis with your existing
                      customers, we look for comparable, new companies. Such an
                      analysis is of dual benefit. Firstly, you know which “new”
                      companies you need to approach and with which arguments.
                      Second, you will then know which of your customers are
                      valuable.
                    </CardDescription>
                  </CardHeader>
                  
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
