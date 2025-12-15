import { Tooltip, Text, Box, Stack } from "@sanity/ui";
import { InfoOutlineIcon } from "@sanity/icons";

export default function TooltipField(props: any) {
  const { schemaType, renderDefault } = props;

  const tooltipText = (schemaType as any)?.tooltip ?? "";
  const isBoolean = schemaType.type === "boolean";

  // Our custom header
  const Header = (
    <Box style={{ display: "flex", alignItems: "center", gap: "8px", paddingBottom: "5px" }}>
      <Text weight="semibold">{schemaType.title}</Text>

      {tooltipText && (
        <Tooltip content={<Text size={1}>{tooltipText}</Text>} placement="right" portal>
          <Box
            style={{
              cursor: "pointer",
              opacity: 0.6,
              display: "flex",
              alignItems: "center",
            }}
          >
            <InfoOutlineIcon />
          </Box>
        </Tooltip>
      )}
    </Box>
  );

  return (
    <Stack space={3}>
      {isBoolean && Header}

      {renderDefault({
        ...props,
        hideLabel: !isBoolean,
        title: isBoolean ? undefined : Header,
      })}
    </Stack>
  );
}
