import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles } from "lucide-react";
import { useCanvasStore } from "@/store/canvasStore";

const presets = [
  { id: 1, name: "Doodle element set", image: "🎨" },
  { id: 2, name: "Botanical pattern", image: "🌿" },
  { id: 3, name: "Retro album cover", image: "🎵" },
  { id: 4, name: "Vintage travel card", image: "✈️" },
];

export const AIPanel = () => {
  const [prompt, setPrompt] = useState("");
  const [tmpImage, setTmpImage] = useState<string | null>(null);
  const addObject = useCanvasStore((s) => s.addObject);

  // Handle AI Generation Button
  async function handleDomineAIGenerate() {
    if (!prompt) return;
    const res = await fetch("https://vitalizepay.duckdns.org/webhook-test/domine-ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const result = await res.json();
    // Prefer base64, else URL
    setTmpImage(result.base64 ? `data:image/png;base64,${result.base64}` : result.imageUrl);
  }

  // Handle preset click
  function handlePreset(presetName: string) {
    setPrompt(presetName);
  }

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-foreground">What do you want to create?</h3>
        </div>
        <p className="text-sm text-muted-foreground">
          Generate images, edit them, or add one from your canvas to customize it
        </p>
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-medium text-foreground">Create a</h4>
        <div className="space-y-2">
          {presets.map((preset) => (
            <Card
              key={preset.id}
              className="p-3 bg-muted hover:bg-muted/70 cursor-pointer transition-all border-border flex items-center gap-3"
              onClick={() => handlePreset(preset.name)}
            >
              <span className="text-2xl">{preset.image}</span>
              <span className="text-sm text-foreground">{preset.name}</span>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <Textarea
          placeholder="What can I help you create?"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="min-h-[100px] bg-background border-border resize-none"
        />
        <Button className="w-full bg-gradient-violet" onClick={handleDomineAIGenerate}>
          <Sparkles className="w-4 h-4 mr-2" />
          Generate Image
        </Button>
      </div>

      {/* Modal for AI image review & accept */}
      {tmpImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white p-6 rounded shadow-xl flex flex-col items-center gap-4 max-w-[90vw]">
            <img src={tmpImage} alt="AI preview" style={{ maxWidth: 370, maxHeight: 400 }} />
            <div className="flex gap-4">
              <Button
                className="bg-green-600 hover:bg-green-700"
                onClick={() => {
                  addObject({
                    type: "image",
                    x: 170,
                    y: 160,
                    width: 220,
                    height: 220,
                    src: tmpImage,
                    name: prompt,
                  });
                  setTmpImage(null);
                }}
              >
                ✓ Apply to Canvas
              </Button>
              <Button
                variant="destructive"
                onClick={() => setTmpImage(null)}
              >
                ✗ Discard
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="pt-4 border-t border-border">
        <h4 className="text-sm font-semibold text-foreground mb-3">Domine Image Styles</h4>
        <p className="text-sm text-muted-foreground mb-3">
          Add a Style for better, consistent results
        </p>
        <Button variant="outline" className="w-full border-border">
          Add Style
        </Button>
      </div>
    </div>
  );
};
