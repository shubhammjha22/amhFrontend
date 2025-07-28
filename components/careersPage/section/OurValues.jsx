import { Card, CardContent } from "@/components/ui/card";

export default function OurValues() {
  const values = [
    {
      title: "Excellence",
      description:
        "We deliver exceptional results and continuously raise the bar for ourselves and our clients.",
      color: "text-green-400",
    },
    {
      title: "Growth",
      description:
        "We embrace challenges as opportunities to learn, improve, and expand our capabilities.",
      color: "text-blue-400",
    },
    {
      title: "Impact",
      description:
        "We focus on creating measurable value and meaningful outcomes for our clients and team.",
      color: "text-purple-400",
    },
    {
      title: "Transparency",
      description:
        "We operate with honesty, openness, and clear communication in everything we do.",
      color: "text-orange-400",
    },
  ];
  return (
    <section className="py-24 bg-gray-900/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-white mb-6">
            Our <span className="text-green-400">Values</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black border-gray-800 hover:border-green-500/30 transition-all duration-300 p-10"
            >
              <CardContent className="p-0">
                <h3 className={`text-3xl mb-4 ${value.color}`}>
                  {value.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
