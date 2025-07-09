import Button from '@/components/ui/Button';
import { Card } from "@/components/ui/Card";
import { getT } from "@/i18n/server";


export default async function CompoundCard({ title, description }) {
  const t = await getT();
  return (
    <Card>
      <h2>{t('navbar:title', { defaultValue: title })}</h2>
      <p>{t('navbar:description', { defaultValue: description })}</p>
      <Button>{t('navbar:action', { defaultValue: 'Action' })}</Button>
    </Card>
  );
} 